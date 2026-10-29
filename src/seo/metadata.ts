import { getProjects } from '../data/projects';
import english from '../i18n/en.json';
import { getSeo, localizedPath, SITE_URL } from './config';

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function structuredData(pathname: string) {
  const seo = getSeo(pathname);
  if (!seo.known) return null;
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const graph: object[] = [
    {
      '@type': 'Person', '@id': personId, name: 'Mustafa Yücel', url: `${SITE_URL}/`,
      jobTitle: 'Senior Full Stack Engineer',
      alternateName: 'Mustafa Yucel',
      sameAs: ['https://github.com/someoxygen', 'https://www.linkedin.com/in/mstfycl/'],
      knowsAbout: ['.NET', 'Node.js', 'React', 'Angular', 'Flutter', 'Microservices', 'TypeScript'],
    },
    { '@type': 'WebSite', '@id': websiteId, url: `${SITE_URL}/`, name: 'Mustafa Yücel', inLanguage: ['tr', 'en'], publisher: { '@id': personId } },
    {
      '@type': seo.pagePath === '/projects/' ? 'CollectionPage' : seo.pagePath === '/' ? 'ProfilePage' : 'WebPage',
      '@id': `${seo.canonical}#webpage`, url: seo.canonical, name: seo.title,
      description: seo.description, inLanguage: seo.language,
      isPartOf: { '@id': websiteId }, about: { '@id': personId },
      ...(seo.pagePath === '/' ? { mainEntity: { '@id': personId } } : { breadcrumb: { '@id': `${seo.canonical}#breadcrumb` } }),
      ...(seo.pagePath === '/projects/' ? { mainEntity: { '@id': `${seo.canonical}#projects` } } : {}),
    },
  ];
  if (seo.pagePath !== '/') graph.push({
    '@type': 'BreadcrumbList', '@id': `${seo.canonical}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: seo.language === 'tr' ? 'Hakkımda' : 'About', item: SITE_URL + localizedPath('/', seo.language) },
      { '@type': 'ListItem', position: 2, name: seo.name, item: seo.canonical },
    ],
  });
  if (seo.pagePath === '/projects/') graph.push({
    '@type': 'ItemList', '@id': `${seo.canonical}#projects`,
    itemListElement: getProjects(key => seo.language === 'en' ? english[key] : key).map((project, index) => ({
      '@type': 'ListItem', position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode', name: project.title, description: project.description, codeRepository: project.link,
        keywords: project.technologies.join(', '),
        programmingLanguage: project.technologies.filter(technology => ['C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Dart'].includes(technology)),
      },
    })),
  });
  return { '@context': 'https://schema.org', '@graph': graph };
}

// Shared by the static HTML build and client navigation to prevent metadata drift.
export function renderSeoHead(pathname: string): string {
  const seo = getSeo(pathname);
  const meta = (key: string, value: string, property = false) => `<meta data-seo ${property ? 'property' : 'name'}="${key}" content="${escapeHtml(value)}"/>`;
  const link = (rel: string, url: string, language?: string) => `<link data-seo rel="${rel}" href="${escapeHtml(url)}"${language ? ` hreflang="${language}"` : ''}/>`;
  const data = structuredData(pathname);
  return [
    `<title data-seo>${escapeHtml(seo.title)}</title>`,
    meta('description', seo.description), meta('robots', seo.robots), meta('author', 'Mustafa Yücel'),
    ...(seo.known ? [link('canonical', seo.canonical), ...['tr', 'en', 'x-default'].map(language => link('alternate', SITE_URL + localizedPath(seo.pagePath, language === 'en' ? 'en' : 'tr'), language))] : []),
    meta('og:type', 'website', true), meta('og:site_name', 'Mustafa Yücel', true),
    meta('og:title', seo.title, true), meta('og:description', seo.description, true), meta('og:url', seo.canonical, true),
    meta('og:locale', seo.language === 'tr' ? 'tr_TR' : 'en_US', true),
    meta('og:locale:alternate', seo.language === 'tr' ? 'en_US' : 'tr_TR', true),
    meta('og:image', seo.image, true), meta('og:image:width', '1200', true), meta('og:image:height', '630', true),
    meta('og:image:alt', 'Mustafa Yücel | Senior Full Stack Engineer', true),
    meta('twitter:card', 'summary_large_image'), meta('twitter:title', seo.title), meta('twitter:description', seo.description),
    meta('twitter:image', seo.image), meta('twitter:image:alt', 'Mustafa Yücel | Senior Full Stack Engineer'),
    ...(data ? [`<script data-seo type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`] : []),
  ].join('\n');
}

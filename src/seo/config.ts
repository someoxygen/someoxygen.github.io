export type Language = 'tr' | 'en';
export const SITE_URL = 'https://mustafayucel.com';
export const pagePaths = ['/', '/projects/', '/resume/'] as const;

export function routeInfo(pathname: string) {
  // GitHub Pages serves directory index files at both URL forms.
  // Keep their client-rendered content and indexing rules identical.
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
  const language: Language = path === '/en' || path.startsWith('/en/') ? 'en' : 'tr';
  const base = language === 'en' ? path.slice(3) || '/' : path;
  const pagePath = base === '/' ? '/' : `${base}/`;
  return { language, pagePath, known: pagePaths.some(path => path === pagePath) };
}

export function localizedPath(path: string, language: Language): string {
  const { pagePath } = routeInfo(path);
  return language === 'en' ? `/en${pagePath}` : pagePath;
}

const pages = {
  '/': {
    tr: { title: 'Mustafa Yücel | Senior Full Stack Engineer', name: 'Hakkımda', description: 'Mustafa Yücel’in kişisel portfolyosu. .NET, Node.js, React, Angular ve Flutter ile kurumsal yazılım, web ve mobil uygulama geliştirme deneyimi ve projeleri.' },
    en: { title: 'Mustafa Yücel | Senior Full Stack Engineer', name: 'About', description: 'Explore Mustafa Yücel’s portfolio: enterprise software, web and mobile applications built with .NET, Node.js, React, Angular and Flutter.' },
  },
  '/projects/': {
    tr: { title: 'Yazılım Projeleri | Mustafa Yücel', name: 'Projelerim', description: 'Mustafa Yücel’in açık kaynak yazılım projelerini keşfedin. React, Angular, .NET, Node.js ve Flutter ile web, mobil uygulama ve API örnekleri.' },
    en: { title: 'Software Projects | Mustafa Yücel', name: 'My projects', description: 'Explore Mustafa Yücel’s open source projects: web and mobile applications, APIs and integrations built with React, Angular, .NET, Node.js and Flutter.' },
  },
  '/resume/': {
    tr: { title: 'Özgeçmiş ve Yazılım Deneyimi | Mustafa Yücel', name: 'Özgeçmiş', description: 'Mustafa Yücel’in özgeçmişi: full stack yazılım geliştirme deneyimi, teknik yetenekler, eğitim ve sertifikalar. .NET, mikroservisler, React ve Angular.' },
    en: { title: 'Resume & Engineering Experience | Mustafa Yücel', name: 'Resume', description: 'Mustafa Yücel’s resume: full stack engineering experience, technical skills, education and certifications in .NET, microservices, React and Angular.' },
  },
};

export function getSeo(pathname: string) {
  const route = routeInfo(pathname);
  const page = pages[route.pagePath as keyof typeof pages]?.[route.language];
  const fallback = route.language === 'tr'
    ? { title: 'Sayfa bulunamadı | Mustafa Yücel', name: 'Sayfa bulunamadı', description: 'Aradığınız sayfa bulunamadı. Mustafa Yücel’in portfolyosunu, projelerini ve özgeçmişini inceleyin.' }
    : { title: 'Page not found | Mustafa Yücel', name: 'Page not found', description: 'The requested page could not be found. Explore Mustafa Yücel’s portfolio, projects and resume.' };
  return {
    ...route, ...(page || fallback),
    canonical: SITE_URL + localizedPath(route.pagePath, route.language),
    robots: route.known ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    image: `${SITE_URL}/social-preview.png`,
  };
}

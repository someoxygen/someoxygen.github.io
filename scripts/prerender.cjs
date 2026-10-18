const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const esbuild = require('esbuild');

async function main() {
  const buildDirectory = path.resolve(__dirname, '../build');
  const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-seo-'));
  try {
    const bundle = path.join(temporaryDirectory, 'render.cjs');
    await esbuild.build({
      entryPoints: [path.resolve(__dirname, '../src/seo/prerender.tsx')],
      outfile: bundle, bundle: true, platform: 'node', format: 'cjs',
      define: { 'process.env.PUBLIC_URL': '""', 'process.env.NODE_ENV': '"production"' },
    });
    const { renderPage, renderSeoHead, pagePaths, localizedPath, SITE_URL, getSeo } = require(bundle);
    const template = fs.readFileSync(path.join(buildDirectory, 'index.html'), 'utf8')
      .replace(/<title>[\s\S]*?<\/title>/i, '')
      .replace(/<meta\s+name="description"[^>]*\/?\s*>/i, '');
    const routes = pagePaths.flatMap(page => ['tr', 'en'].map(language => localizedPath(page, language)));
    for (const route of [...routes, '/404.html']) {
      const html = template
        .replace(/<html lang="[^"]*"/, `<html lang="${getSeo(route).language}"`)
        .replace('</head>', `${renderSeoHead(route)}</head>`)
        .replace('<div id="root"></div>', () => `<div id="root" data-route="${route}">${renderPage(route)}</div>`);
      const destination = path.join(buildDirectory, route === '/404.html' ? '404.html' : `${route.slice(1)}index.html`);
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.writeFileSync(destination, html);
    }
    const escapeXml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    const sitemap = pagePaths.flatMap(page => ['tr', 'en'].map(language => {
      const alternates = ['tr', 'en', 'x-default'].map(lang => `<xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(SITE_URL + localizedPath(page, lang === 'en' ? 'en' : 'tr'))}"/>`).join('');
      return `<url><loc>${escapeXml(SITE_URL + localizedPath(page, language))}</loc>${alternates}</url>`;
    })).join('\n');
    fs.writeFileSync(path.join(buildDirectory, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap}\n</urlset>\n`);
    fs.writeFileSync(path.join(buildDirectory, '.nojekyll'), '');
    console.log(`Prerendered ${routes.length} localized pages, 404.html and sitemap.xml.`);
  } finally {
    fs.rmSync(path.join(temporaryDirectory, 'render.cjs'), { force: true });
    fs.rmdirSync(temporaryDirectory);
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });

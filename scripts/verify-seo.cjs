const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const directory = path.resolve(__dirname, '../build');
const sitemap = fs.readFileSync(path.join(directory, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 6, 'Expected three pages in two languages');
assert.equal(new Set(urls).size, urls.length, 'Sitemap URLs must be unique');
const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const html = fs.readFileSync(path.join(directory, pathname.slice(1), 'index.html'), 'utf8');
  assert.equal((html.match(/<title\b/g) || []).length, 1, `${url}: duplicate title`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${url}: duplicate description`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${url}: duplicate canonical`);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `${url}: incorrect canonical`);
  assert.ok(html.includes(`lang="${pathname.startsWith('/en/') ? 'en' : 'tr'}"`), `${url}: wrong language`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${url}: expected one H1`);
  assert.ok(html.includes('id="main-content"'), `${url}: missing main content`);
  assert.ok(html.includes('index, follow, max-image-preview:large'), `${url}: indexing disabled`);
  assert.ok(!html.includes('noindex'), `${url}: unexpected noindex`);
  assert.equal((html.match(/hreflang=/g) || []).length, 3, `${url}: missing language alternates`);
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)[1];
  const description = html.match(/name="description" content="([^"]+)"/)[1];
  titles.add(title); descriptions.add(description);
  const schema = JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/)[1]);
  assert.ok(schema['@graph'].some(node => node.url === url), `${url}: schema URL mismatch`);
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const file = path.join(directory, href.slice(1), href.endsWith('/') ? 'index.html' : '');
    assert.ok(fs.existsSync(file), `${url}: broken internal URL ${href}`);
  }
  assert.ok(html.includes(pathname.startsWith('/en/') ? 'All rights reserved' : 'Tüm hakları saklıdır'), `${url}: content language mismatch`);
}
assert.equal(titles.size, 5, 'Each page needs a distinct title (home title is shared across languages)');
assert.equal(descriptions.size, 6, 'Each localized page needs a distinct description');
const notFound = fs.readFileSync(path.join(directory, '404.html'), 'utf8');
assert.ok(notFound.includes('noindex, follow'), '404 must not be indexed');
assert.ok(!notFound.includes('rel="canonical"'), '404 must not canonicalize to a valid page');
assert.ok(fs.readFileSync(path.join(directory, 'robots.txt'), 'utf8').includes('Sitemap: https://mustafayucel.com/sitemap.xml'));
const image = fs.readFileSync(path.join(directory, 'social-preview.png'));
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log('SEO checks passed: static content, metadata, schema, language URLs, assets, sitemap and 404.');

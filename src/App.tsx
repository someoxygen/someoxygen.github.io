import React from 'react';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import Seo from './seo/Seo';
import { localizedPath, routeInfo } from './seo/config';

function PageContent() {
  const { pathname } = useLocation();
  const { pagePath, language } = routeInfo(pathname);
  const { t } = useLanguage();
  const Page = pagePath === '/' ? About : pagePath === '/projects/' ? Projects : pagePath === '/resume/' ? Resume : null;
  return (
    <div className="d-flex flex-column min-vh-100">
      <Seo />
      <a className="skip-link" href="#main-content">{language === 'tr' ? 'Ana içeriğe geç' : 'Skip to content'}</a>
      <Navbar />
      <main id="main-content" className="flex-grow-1" tabIndex={-1}>
        {Page ? <Page /> : <section className="container py-5">
          <h1>{language === 'tr' ? 'Sayfa bulunamadı' : 'Page not found'}</h1>
          <p>{language === 'tr' ? 'Aradığınız sayfa mevcut değil.' : 'The requested page does not exist.'}</p>
          <Link to={localizedPath('/', language)}>{t('Hakkımda')}</Link>
        </section>}
      </main>
      <Footer />
    </div>
  );
}

// Router-independent tree used by both the browser and the static HTML build.
export function SiteApp() {
  return <LanguageProvider><PageContent /></LanguageProvider>;
}

export default function App() {
  return <BrowserRouter><SiteApp /></BrowserRouter>;
}

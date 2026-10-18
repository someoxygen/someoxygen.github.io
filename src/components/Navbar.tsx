import { localizedPath } from '../seo/config';
import { useLanguage } from '../i18n/LanguageContext';
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.querySelector<HTMLButtonElement>('.navbar-toggler')?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 992px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener?.('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener?.('change', closeOnDesktop);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top transition-all duration-300 ${
      isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
    }`}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to={localizedPath('/', language)}>
          <img className="brand-mark" src={`${process.env.PUBLIC_URL}/brand-mark.svg?v=my-2`} width="40" height="40" alt="" />
          <span className="brand-text">Mustafa Yücel</span>
        </Link>

        <div className="navbar-controls d-flex align-items-center gap-2 order-lg-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label={t("Menüyü aç/kapat")}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to={localizedPath('/', language)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-link-text">{t("Hakkımda")}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={localizedPath('/projects', language)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-link-text">{t("Projelerim")}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={localizedPath('/resume', language)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-link-text">{t("CV")}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

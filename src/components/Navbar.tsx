import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
      isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
    }`}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="brand-text">Mustafa Yücel</span>
        </Link>
        
        <div className="d-flex align-items-center gap-2 order-lg-3">
          <ThemeToggle />
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                end
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-link-text">Hakkımda</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/projects" 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-link-text">Projelerim</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/resume" 
                className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-link-text">CV</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

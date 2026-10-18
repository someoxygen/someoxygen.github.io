import { useLanguage } from '../i18n/LanguageContext';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/someoxygen',
      title: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <FaLinkedin />,
      url: 'http://linkedin.com/in/mstfycl',
      title: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:mustafaycl37@gmail.com',
      title: t("E-posta"),
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="row py-5">
          {/* Brand Section */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="animate-fade-in-up">
              <h4 className="fw-bold mb-3">
                <span>Mustafa Yücel</span>
              </h4>
              <p className="text-muted mb-4">
                {t("5+ yıllık deneyime sahip bir Senior Full Stack Engineer’ım. .NET, Node.js, Angular, React ve Flutter ile kurumsal yazılımlar, dağıtık sistemler, web ve mobil uygulamalar geliştiriyorum.")}
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon-link"
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h6 className="fw-bold mb-3">{t("Hızlı Linkler")}</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-muted text-decoration-none hover-text-white">
                    {t("Hakkımda")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/projects" className="text-muted text-decoration-none hover-text-white">
                    {t("Projelerim")}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/resume" className="text-muted text-decoration-none hover-text-white">
                    {t("CV")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h6 className="fw-bold mb-3">{t("Hizmetler")}</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-muted">{t("Full Stack Geliştirme")}</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">{t("API & Web Servisleri")}</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">{t("Veritabanı Yönetimi")}</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">{t("Sistem Entegrasyonu")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h6 className="fw-bold mb-3">{t("İletişim")}</h6>
              <div className="mb-3">
                <p className="text-muted mb-1">
                  <FaEnvelope className="me-2" />
                  mustafaycl37@gmail.com
                </p>
              </div>
              <div className="mb-3">
                <p className="text-muted mb-1">
                  <FaPhone className="me-2" />
                  +90 534 661 49 92
                </p>
              </div>
              <div className="mb-3">
                <p className="text-muted mb-1">
                  <FaGithub className="me-2" />
                  github.com/someoxygen
                </p>
              </div>
              <div className="mb-3">
                <p className="text-muted mb-0">
                  {t("İstanbul, Türkiye")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-muted">
                &copy; {currentYear} {t("Mustafa Yücel. Tüm hakları saklıdır.")}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 text-muted">
                {t("Sevgiyle")} <FaHeart className="text-danger mx-1" /> {t("React & TypeScript ile geliştirildi.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

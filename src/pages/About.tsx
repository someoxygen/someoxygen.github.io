import { useLanguage } from '../i18n/LanguageContext';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight, FiCode, FiLayers, FiDatabase, FiGithub } from 'react-icons/fi';

const About: React.FC = () => {
  const { t } = useLanguage();
  const skillGroups = [
    { icon: <FiCode />, number: '01', title: t("Frontend & Mobil"), description: t("Modern web ve çapraz platform mobil uygulamalar."), technologies: ['React', 'Angular', 'Vue', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { icon: <FiLayers />, number: '02', title: t("Backend & Mimari"), description: t("Kurumsal yazılımlar, dağıtık sistemler ve ölçeklenebilir mikroservisler."), technologies: ['C#', 'Java', '.NET 5/6/8/10', 'ASP.NET Core', 'ASP.NET MVC', 'Node.js', 'REST / SOAP', 'gRPC', 'CQRS', 'Clean Architecture', 'SOLID'] },
    { icon: <FiDatabase />, number: '03', title: t("Veritabanı & DevOps"), description: t("Veri yönetimi, mesajlaşma altyapıları ve CI/CD süreçleri."), technologies: ['SQL Server / MSSQL', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Kafka', 'Docker', 'Git', 'GitHub', 'GitLab CI/CD', 'Azure DevOps'] },
  ];


  return (
    <div className="home-page">
      <section className="section-hero home-hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-copy animate-fade-in-up">
              <div className="hero-eyebrow"><span /> SENIOR FULL STACK ENGINEER</div>
              <p className="hero-intro">{t("Merhaba, ben Mustafa Yücel.")}</p>
              <h1 id="hero-title">{t("Fikirleri koda,")}<br /><span>{t("kodu deneyime.")}</span></h1>
              <p className="hero-description">{t("5+ yıllık deneyimimle kurumsal yazılımlar, dağıtık sistemler, web ve mobil uygulamalar geliştiriyorum. Havayolu, ödeme, e-fatura ve mühendislik otomasyonu alanlarında çözümler üretiyorum.")}</p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">{t("Projelerimi keşfet")} <FiArrowUpRight aria-hidden="true" /></Link>
                <Link to="/resume" className="hero-secondary-link">{t("CV’mi görüntüle")} <FiArrowRight aria-hidden="true" /></Link>
              </div>
              <a className="hero-github" href="https://github.com/someoxygen" target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> github.com/someoxygen <FiArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="developer-panel animate-fade-in-up" aria-label={t("Geliştirici profili")}>
              <div className="editor-toolbar"><div className="editor-dots" aria-hidden="true"><span /><span /><span /></div><span>developer.ts</span><FiCode aria-hidden="true" /></div>
              <div className="editor-tab"><FiCode aria-hidden="true" /> developer.ts <span>TS</span></div>
              <div className="editor-code">
                <div><span className="line-number" aria-hidden="true">01</span><span className="syntax-comment">{t("// Biraz kod, çokça çözüm.")}</span></div>
                <div><span className="line-number" aria-hidden="true">02</span><span><span className="syntax-keyword">const</span> developer = {'{'}</span></div>
                <div><span className="line-number" aria-hidden="true">03</span><span>  name: <span className="syntax-string">'Mustafa Yücel'</span>,</span></div>
                <div><span className="line-number" aria-hidden="true">04</span><span>  role: <span className="syntax-string">'Senior Full Stack Engineer'</span>,</span></div>
                <div><span className="line-number" aria-hidden="true">05</span><span>  experience: <span className="syntax-number">{t("'5+ yıl'")}</span>,</span></div>
                <div><span className="line-number" aria-hidden="true">06</span><span>  stack: [</span></div>
                <div><span className="line-number" aria-hidden="true">07</span><span>    <span className="syntax-string">'C#'</span>, <span className="syntax-string">'.NET'</span>, <span className="syntax-string">'Node.js'</span> <span className="syntax-string">'Java'</span>,</span></div>
                <div><span className="line-number" aria-hidden="true">08</span><span>    <span className="syntax-string">'React'</span>, <span className="syntax-string">'Angular'</span>, <span className="syntax-string">'Vue'</span></span></div>
                <div><span className="line-number" aria-hidden="true">09</span><span>  ],</span></div>
                <div><span className="line-number" aria-hidden="true">10</span><span>  mindset: <span className="syntax-string">{t("'Çözüm odaklı'")}</span></span></div>
                <div><span className="line-number" aria-hidden="true">11</span><span>{'}'};</span></div>
                <div><span className="line-number" aria-hidden="true">12</span><span className="syntax-comment">{t("// Bir sonraki fikri hayata geçirelim.")}</span></div>
              </div>
              <div className="editor-status"><span><span className="status-dot" /> {t("Temiz kod. Güçlü çözümler.")}</span><span>UTF-8</span></div>
            </div>
          </div>
          <div className="hero-facts">
            <div><strong>{t("5+ yıl")}</strong><span>{t("Endüstri deneyimi")}</span></div>
            <div><strong>{t("Uçtan uca")}</strong><span>{t("Full stack geliştirme")}</span></div>
            <div><strong>{t("Ölçeklenebilir")}</strong><span>{t("Modern web çözümleri")}</span></div>
            <a href="#expertise">{t("Teknolojiyle üretiyorum")} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="expertise-section section-light" id="expertise" aria-labelledby="expertise-title">
        <div className="container">
          <div className="home-section-heading"><div><span className="section-eyebrow">{t("01 / YETENEKLERİM")}</span><h2 id="expertise-title">{t("Her katmanda, aynı özen.")}</h2></div><p>{t("Doğru araçlar, temiz kod ve")}<br className="d-none d-md-block" /> {t("sürdürülebilir çözümler.")}</p></div>
          <div className="row g-4">
            {skillGroups.map((group) => (
              <div className="col-lg-4" key={group.title}>
                <article className="skill-card h-100">
                  <div className="skill-card-top"><span className="skill-icon">{group.icon}</span><span className="skill-number">/{group.number}</span></div>
                  <h3>{group.title}</h3><p>{group.description}</p>
                  <div className="technology-tags">{group.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </article>
              </div>
            ))}
          </div>
          <div className="approach-note"><span className="section-eyebrow">{t("YAKLAŞIMIM")}</span><p>{t("SOLID prensipleri, temiz kod standartları ve Agile metodolojilerle çalışıyorum. İş birimleri ve teknik ekiplerle koordineli olarak, Azure DevOps ve GitLab CI/CD süreçleriyle sürdürülebilir çözümler geliştiriyorum.")}</p></div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="experience-section section-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-12"><div className="home-section-heading"><div><span className="section-eyebrow">{t("02 / DENEYİM")}</span><h2>{t("Üreterek biriken deneyim.")}</h2></div><Link to="/resume" className="hero-secondary-link">{t("Tüm özgeçmiş")} <FiArrowUpRight aria-hidden="true" /></Link></div></div>

            {/* Çuhadaroğlu Metal A.Ş. */}
            <div className="col-md-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">

                    Çuhadaroğlu Metal A.Ş.
                  </h5>
                  <h6 className="text-muted">{t("Full Stack Developer (Nisan 2025 – Haziran 2026)")}</h6>
                  <ul className="card-text text-muted mt-3">
                    <li>{t(".NET ve Node.js ile kurumsal web uygulamaları geliştirdim; ölçeklenebilir servis odaklı ve mikroservis tabanlı mimariler tasarladım.")}</li>
                    <li>{t("Redis cache ve RabbitMQ mesajlaşma yapılarını uyguladım.")}</li>
                    <li>{t("Azure DevOps CI/CD kullanan 6 kişilik Agile ekiplerde, SOLID ve temiz kod standartlarıyla çalıştım.")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overtech Bilgi Teknolojileri */}
            <div className="col-md-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">

                    Overtech Bilgi Teknolojileri
                  </h5>
                  <h6 className="text-muted">{t("Full Stack Developer (Nisan 2021 – Nisan 2025)")}</h6>
                  <ul className="card-text text-muted mt-3">
                    <li>{t("Milyonlarca kullanıcıya hizmet eden havayolu bilet fiyatlandırma, ödeme ve e-fatura çözümleri geliştirdim.")}</li>
                    <li>{t("10+ API ve mikroservisin tasarım, geliştirme ve bakım süreçlerinde görev aldım; RESTful API ve SOAP entegrasyonları geliştirdim.")}</li>
                    <li>{t("JWT ve OAuth2 ile güvenli kimlik doğrulama yapıları uyguladım; Redis ve RabbitMQ kullandım.")}</li>
                    <li>{t("GitLab CI/CD kullanan 10–30 kişilik Agile ekiplerde çalıştım.")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

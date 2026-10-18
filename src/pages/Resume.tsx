import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import React from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTools,
  FaLanguage,
  FaCertificate,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Resume: React.FC = () => {
  const { t } = useLanguage();
  const skills = {
    frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Angular', 'React', 'Vue', 'JavaScript', 'TypeScript', 'Flutter', 'Dart'],
    backend: ['C#', 'Java', '.NET 5/6/8/10', 'ASP.NET Core', 'ASP.NET MVC', 'Node.js', 'REST API', 'SOAP API', 'gRPC'],
    database: ['SQL Server / MSSQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['RabbitMQ', 'Kafka', 'Docker', 'Azure DevOps', 'GitLab CI/CD', 'Git', 'GitHub', 'GitLab', 'Microservices', 'CQRS', 'Distributed Systems', 'Clean Architecture', 'SOLID', 'Agile']
  };

  const languages = [
    { name: t("Türkçe"), level: t("Ana Dil") },
    { name: t("İngilizce"), level: t("İleri Seviye") }
  ];

  const education = [
    {
      degree: t("Bilgisayar Mühendisliği Lisans"),
      school: t("Kocaeli Üniversitesi"),
      period: '2013–2018',
      description: t("Eylül 2013 – Haziran 2018 tarihleri arasında Bilgisayar Mühendisliği lisans eğitimi.")
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Çuhadaroğlu Metal A.Ş.',
      period: '04/2025–06/2026',
      description:
        t(".NET ve Node.js ile kurumsal web uygulamalarının geliştirme ve bakım süreçlerinde görev aldım. Ölçeklenebilir servis odaklı ve mikroservis tabanlı mimariler tasarladım; Redis cache ve RabbitMQ mesajlaşma yapılarını uyguladım. İş birimleri ve teknik ekiplerle koordineli çalışarak SOLID prensiplerini, temiz kod standartlarını ve Agile metodolojileri uyguladım. Azure DevOps CI/CD kullanan 6 kişilik Agile ekiplerde çalıştım."),
      technologies: ['.NET', 'Node.js', 'Microservices', 'Redis', 'RabbitMQ', 'Azure DevOps', 'CI/CD', 'SOLID', 'Agile']
    },
    {
      title: 'Full Stack Developer',
      company: 'Overtech Bilgi Teknolojileri',
      period: '04/2021–04/2025',
      description:
        t("Milyonlarca kullanıcıya hizmet eden havayolu bilet fiyatlandırma sistemleri, ödeme platformları ve e-fatura çözümleri geliştirdim. Kritik iş süreçlerini destekleyen 10+ API ve mikroservisin tasarım, geliştirme ve bakım süreçlerinde görev aldım. RESTful API ve SOAP servisleri geliştirdim ve entegre ettim; JWT Authentication ve OAuth2 ile güvenli kimlik doğrulama ve yetkilendirme yapıları uyguladım. Birden fazla kurumsal uygulamada Redis ve RabbitMQ kullandım. GitLab CI/CD kullanan 10–30 kişilik Agile ekiplerde çalıştım."),
      technologies: ['REST API', 'SOAP API', 'Microservices', 'JWT', 'OAuth2', 'Redis', 'RabbitMQ', 'GitLab CI/CD', 'Agile']
    },
    {
      title: 'IT Helpdesk Specialist',
      company: 'Türk Telekom A.Ş.',
      period: '11/2020–04/2021',
      description:
        t("Kurumsal ortamda yazılım, donanım ve teknik destek sağladım. Uygulama, cihaz ve ağ erişimiyle ilgili kullanıcı sorunlarını teşhis ederek çözdüm. Karmaşık sorunları ilgili ekiplere yönlendirdim ve destek süreçlerini dokümante ettim."),
      technologies: [t("Yazılım ve Donanım Desteği"), t("Ağ Erişimi"), t("Sorun Giderme"), t("Dokümantasyon")]
    }
  ];

  const projects = getProjects(t);

  const certifications = [
    { name: t("Oyunlaştırılmış Agile & Scrum Eğitimi") },
    { name: t("Sistem ve Ağ Uzmanlığı Eğitimi") },
    { name: t("C# ile Nesne Yönelimli Programlama") },
    { name: t("HTML & CSS3 ile Duyarlı Web Geliştirme") },
    { name: t("Bootstrap CSS Çerçevesi") }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 animate-fade-in-up">
              <h1 className="display-4 fw-bold mb-4">{t("Özgeçmiş")}</h1>
              <p className="lead mb-5 opacity-90">
                {t("Kurumsal yazılımlar, dağıtık sistemler, web ve mobil uygulamalar geliştirmede 5+ yıllık deneyime sahip bir Senior Full Stack Engineer’ım. ASP.NET Core, .NET, Node.js, Angular, React ve Flutter ile çalışıyorum. Havayolu bilet fiyatlandırma sistemleri, ödeme platformları, e-fatura çözümleri ve mühendislik otomasyon uygulamalarına katkı sağladım.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-5 section-light resume-content">
        <div className="container">
          <div className="resume-layout">
            <aside className="resume-sidebar" aria-label={t("Eğitim ve sertifikalar")}>
              {/* Education */}
              <div className="resume-education animate-slide-in-left">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3 text-primary">
                        <FaGraduationCap className="fa-2x" />
                      </div>
                      <h3 className="fw-bold mb-0">{t("Eğitim")}</h3>
                    </div>

                    {education.map((item, index) => (
                      <div key={index} className="resume-education-item">
                        <div className="resume-entry-heading">
                          <h5 className="fw-semibold mb-1">{item.degree}</h5>
                          <span className="badge bg-primary rounded-pill">{item.period}</span>
                        </div>
                        <h6 className="text-primary mb-2">{item.school}</h6>
                        <p className="text-muted mb-0">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="resume-certifications animate-fade-in-up">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3 text-primary">
                        <FaCertificate className="fa-2x" />
                      </div>
                      <h3 className="fw-bold mb-0">{t("Sertifikalar")}</h3>
                    </div>

                    <div className="row g-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="col-12">
                          <div className="d-flex align-items-start">
                            <div className="me-3 text-primary">
                              <FaCertificate />
                            </div>
                            <div>
                              <h6 className="fw-semibold mb-1">{cert.name}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Experience */}
            <div className="resume-experience animate-slide-in-right">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaBriefcase className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">{t("İş Deneyimi")}</h3>
                  </div>

                  {experience.map((item, index) => (
                    <div key={index} className="resume-timeline-item">
                      <div className="resume-entry-heading">
                        <h5 className="fw-semibold mb-1">{item.title}</h5>
                        <span className="badge bg-primary rounded-pill">{item.period}</span>
                      </div>
                      <h6 className="text-primary mb-2">{item.company}</h6>
                      <p className="text-muted mb-2">{item.description}</p>
                      <div className="d-flex flex-wrap gap-1">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="badge bg-secondary rounded-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="resume-full-width animate-fade-in-up">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaCode className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">{t("Teknik Yetenekler")}</h3>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaCode className="me-2 text-primary" />
                        {t("Frontend & Mobil")}
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {skills.frontend.map((skill, index) => (
                          <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaBriefcase className="me-2 text-primary" />
                        Backend
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {skills.backend.map((skill, index) => (
                          <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaTools className="me-2 text-primary" />
                        {t("Veritabanı, DevOps & Mimari")}
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {[...skills.database, ...skills.tools].map((skill, index) => (
                          <span key={index} className="badge bg-secondary rounded-pill px-3 py-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h5 className="fw-semibold mb-3">
                        <FaLanguage className="me-2 text-primary" />
                        {t("Diller")}
                      </h5>
                      <div className="d-flex flex-column gap-2">
                        {languages.map((lang, index) => (
                          <div key={index} className="d-flex justify-content-between align-items-center">
                            <span className="fw-medium">{lang.name}</span>
                            <span className="badge bg-success rounded-pill">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="resume-full-width animate-fade-in-up">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3 text-primary">
                      <FaCode className="fa-2x" />
                    </div>
                    <h3 className="fw-bold mb-0">{t("Kişisel Projeler")}</h3>
                  </div>

                  <div className="row g-4">
                    {projects.map((project, index) => (
                      <div key={index} className="col-md-6">
                        <div className="card border-0 bg-light h-100">
                          <div className="card-body d-flex flex-column">
                            <div className="resume-project-heading d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                              <h5 className="fw-semibold mb-0">{project.title}</h5>
                              <span className="badge bg-dark-subtle text-dark rounded-pill">
                                {project.category}
                              </span>
                            </div>
                            <p className="text-muted mb-3">{project.description}</p>
                            <div className="d-flex flex-wrap gap-1 mb-3">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="badge bg-primary rounded-pill">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="project-actions mt-auto d-flex flex-wrap gap-2">
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-2"
                                >
                                  <FaGithub /> GitHub <FaExternalLinkAlt />
                                </a>
                              )}
                              {project.demoLink && (
                                <a
                                  href={project.demoLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2"
                                >
                                  {t("Canlı Demo")} <FaExternalLinkAlt />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

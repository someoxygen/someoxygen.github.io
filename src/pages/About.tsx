import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 animate-slide-in-left">
              <h1 className="display-4 fw-bold mb-4">
                Merhaba, ben <span className="text-warning">Mustafa Yücel</span>
              </h1>
              <p className="lead mb-4 opacity-90">
                5 yıllık endüstri deneyimine sahip, yaratıcı ve çözüm odaklı bir Full Stack Developer'ım. 
                C#, Node.js, Angular, React, Vue ve modern web teknolojileri ile kullanıcı deneyimini ön planda
                tutan projeler geliştiriyorum.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/resume" className="btn btn-primary btn-lg rounded-pill px-4">
                  CV'mi Görüntüle
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center animate-slide-in-right">
              <img
                src={profilePic}
                alt="Mustafa Yücel"
                className="profile-image img-fluid"
                style={{ maxWidth: '300px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-5 section-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 mx-auto text-center animate-fade-in-up">
              <h2 className="fw-bold mb-4">Hakkımda</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-start">
                      <h4 className="card-title text-primary mb-3">
                        <i className="fas fa-code me-2"></i>
                        Teknolojiler
                      </h4>
                      <p className="card-text">
                        C#, Node.js, Angular, React, Vue, HTML, CSS, JavaScript, TypeScript, .NET Core,
                        MSSQL, PostgreSQL, MongoDB gibi teknolojilerde yetkinlik kazandım. REST/SOAP 
                        entegrasyonları ve web servis geliştirme konularında deneyimliyim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-start">
                      <h4 className="card-title text-primary mb-3">
                        <i className="fas fa-lightbulb me-2"></i>
                        Yaklaşımım
                      </h4>
                      <p className="card-text">
                        Agile metodolojilere uyumlu, güçlü iletişim ve takım çalışması becerileriyle 
                        dinamik ortamlarda karmaşık problemleri etkili bir şekilde çözebiliyorum. 
                        Sorumluluk sahibi ve yenilikçi yaklaşımımla değer katmayı hedefliyorum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5 section-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center animate-fade-in-up">
              <h2 className="fw-bold mb-5">Yeteneklerim</h2>
            </div>
            <div className="col-md-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-mobile-alt fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title">Frontend</h5>
                  <p className="card-text text-muted">
                    HTML, CSS, Tailwind CSS, Bootstrap, Angular, React, Vue, JavaScript, TypeScript
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-server fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title">Backend</h5>
                  <p className="card-text text-muted">
                    C#, .NET Core, .NET MVC, Node.js, Web API, REST API, SOAP API, Entity Framework
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-database fa-3x text-primary"></i>
                  </div>
                  <h5 className="card-title">Veritabanı & Araçlar</h5>
                  <p className="card-text text-muted">
                    MSSQL, PostgreSQL, MongoDB, Redis, RabbitMQ, Kafka, Git, GitHub, GitLab, Azure DevOps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-5 section-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center animate-fade-in-up">
              <h2 className="fw-bold mb-5">İş Tecrübeleri</h2>
            </div>

            {/* Çuhadaroğlu Metal A.Ş. */}
            <div className="col-md-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <i className="fas fa-building me-2"></i>
                    Çuhadaroğlu Metal A.Ş.
                  </h5>
                  <h6 className="text-muted">Full Stack Developer (Nisan 2025 – Haziran 2026)</h6>
                  <ul className="card-text text-muted mt-3">
                    <li>Şirket içinde geliştirilen gizli bir uygulamada görev aldım.</li>
                    <li>JavaScript tabanlı frontend geliştirmeleri ile kullanıcı deneyimini güçlendirdim.</li>
                    <li>Node.js ve .NET ile oluşturulmuş birden fazla backend projesinde yazılım geliştirmeleri yaptım.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overtech Bilgi Teknolojileri */}
            <div className="col-md-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <i className="fas fa-laptop-code me-2"></i>
                    Overtech Bilgi Teknolojileri
                  </h5>
                  <h6 className="text-muted">Full Stack Developer (Nisan 2021 – Nisan 2025)</h6>
                  <ul className="card-text text-muted mt-3">
                    <li>Çeşitli kurumsal web ve mobil uygulamalarda frontend ve backend geliştirmeleri yaptım.</li>
                    <li>Ödeme sistemleri, entegratörlük çözümleri ve kamuya yönelik yazılımlarda entegrasyonlar gerçekleştirdim.</li>
                    <li>REST/SOAP tabanlı servisler ve özel entegratörlük uygulamalarında sorunların çözümü ve kullanıcı desteği sağladım.</li>
                    <li>Kurumsal yazılımlarda sürdürülebilir, güvenilir ve ölçeklenebilir çözümler geliştirdim.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

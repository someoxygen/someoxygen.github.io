import { useLanguage } from '../i18n/LanguageContext';
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
}

const Blog: React.FC = () => {
  const { t, locale } = useLanguage();
  const posts: BlogPost[] = [
    {
      id: 1,
      title: t("C# .NET Core ile Microservices Mimarisi"),
      summary: t("Modern .NET Core 8 kullanarak microservices mimarisi nasıl tasarlanır ve geliştirilir?"),
      date: '2025-01-15',
    },
    {
      id: 2,
      title: t("Angular ve .NET Core ile Full-Stack Geliştirme"),
      summary: t("Angular frontend ve .NET Core backend ile modern web uygulamaları geliştirme süreçleri."),
      date: '2025-01-08',
    },
    {
      id: 3,
      title: t("Node.js ve MongoDB ile REST API Geliştirme"),
      summary: t("Node.js ve MongoDB kullanarak performanslı ve ölçeklenebilir REST API'ler nasıl geliştirilir?"),
      date: '2024-12-20',
    },
    {
      id: 4,
      title: t("React ve TypeScript ile Modern Frontend Geliştirme"),
      summary: t("React ve TypeScript kullanarak tip güvenli ve sürdürülebilir frontend uygulamaları."),
      date: '2024-12-10',
    },
    {
      id: 5,
      title: t("Entity Framework Core ile Veritabanı Yönetimi"),
      summary: t("EF Core kullanarak MSSQL, PostgreSQL ve MongoDB veritabanları ile etkili çalışma yöntemleri."),
      date: '2024-11-25',
    },
    {
      id: 6,
      title: t("Agile Metodolojiler ve Yazılım Geliştirme Süreçleri"),
      summary: t("Agile yaklaşımlar ile takım çalışması ve proje yönetimi deneyimlerim."),
      date: '2024-11-15',
    },
  ];


  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">{t("Blog Yazılarım")}</h2>
        <div className="row g-4">
          {posts.map(post => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm blog-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{post.title}</h5>
                  <small className="text-muted mb-2">
                    {new Date(post.date).toLocaleDateString(locale)}
                  </small>
                  <p className="card-text text-muted flex-grow-1">{post.summary}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-sm btn-outline-primary mt-2 rounded-pill align-self-start"
                  >
                    {t("Devamını oku")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

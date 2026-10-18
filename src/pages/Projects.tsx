import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projects = getProjects(t);

  const categories = ['all', 'Frontend', 'Backend', 'Full-Stack'];
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 animate-fade-in-up">
              <h1 className="display-4 fw-bold mb-4">
                {t("Projelerim")}
              </h1>
              <p className="lead mb-5 opacity-90">
                {t("Modern teknolojilerle geliştirdiğim projeler ve çözümler. Her proje, kullanıcı deneyimi ve performans odaklı yaklaşımla tasarlandı.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5 section-light">
        <div className="container">
          {/* Category Filter */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="project-filters d-flex justify-content-center flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                    className={`btn rounded-pill px-4 py-2 ${
                      selectedCategory === category
                        ? 'btn-primary'
                        : 'btn-outline-primary'
                    }`}
                  >
                    {category === 'all' ? t('Tümü') : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-100 border-0 shadow-sm project-card">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      <span className="badge bg-primary rounded-pill mb-2">
                        {project.category}
                      </span>
                    </div>

                    <h5 className="card-title fw-semibold mb-3">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{project.description}</p>

                    <div className="mt-auto">
                      <div className="mb-3 d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="badge bg-secondary rounded-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-actions d-flex flex-wrap gap-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary rounded-pill flex-fill"
                          >
                            <FaGithub className="me-1" />
                            GitHub
                          </a>
                        )}
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-primary rounded-pill flex-fill"
                          >
                            <FaEye className="me-1" />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

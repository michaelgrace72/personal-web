import React from 'react';
import { ExternalLink, Github, Calendar, CreditCard, Lock, Building2, Factory, Globe } from 'lucide-react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  links: { github?: string; demo?: string; portal?: string };
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Cerdas ERP - Multi-Tenant Cooperative Platform",
      description: "A multi-tenant cooperative (koperasi) management platform built as 16 services behind a Kong API gateway, applying Clean Architecture and a database-per-service pattern.",
      technologies: ["Go", "TypeScript", "Next.js", "Kong", "PostgreSQL", "Redis", "Docker", "GitLab CI/CD"],
      features: [
        "16 services with database-per-service isolation",
        "OAuth 2.0 + RFC 7662 introspection at the gateway",
        "FIFO batch stock with weighted-average costing",
        "Load-tested to 1,000 VUs at p95 357ms"
      ],
      links: {
        demo: "https://cerdaserp.com",
        portal: "https://koperasi.iimlab.id"
      },
      icon: <Building2 size={24} />
    },
    {
      title: "VoCalendar - AI-Powered Voice Calendar App",
      description: "Built calendar app with natural language voice commands in Bahasa Indonesia. Integrated GPT for scheduling and Firebase for real-time sync.",
      technologies: ["Flutter", "Firebase", "GPT API", "Dart"],
      features: [
        "Natural language voice commands",
        "Bahasa Indonesia support",
        "GPT integration for scheduling",
        "Real-time Firebase sync"
      ],
      links: {
        github: "https://github.com/michaelgrace72/VoCalendar"
      },
      icon: <Calendar size={24} />
    },
    {
      title: "Credit Card Approval Prediction System",
      description: "Built ML app for real-time credit risk assessment using machine learning algorithms. Containerized system with Docker for scalable deployment.",
      technologies: ["Python", "Flask", "CatBoost", "Docker"],
      features: [
        "Real-time credit risk assessment",
        "CatBoost ML algorithm",
        "Containerized deployment",
        "RESTful API endpoints"
      ],
      links: {
        github: "https://github.com/michaelgrace72/CreditCardApprovalPrediction"
      },
      icon: <CreditCard size={24} />
    },
    {
      title: "Secure File Encryption Application",
      description: "Implemented AES/DES/RC4-based file encryption system with role-based access control and activity audit logging.",
      technologies: ["Python", "Flask", "PostgreSQL"],
      features: [
        "AES/DES/RC4 encryption algorithms",
        "Role-based access control",
        "Activity logging & auditing",
        "Secure file storage"
      ],
      links: {
        github: "https://github.com/michaelgrace72/Data-encryption-Flask"
      },
      icon: <Lock size={24} />
    },
    {
      title: "Manufacturing ERP (Portal Access & HRM)",
      description: "Developed the Portal Access and HRM modules of a manufacturing ERP at the MCI Laboratory, containerized as Docker-based microservices with RabbitMQ messaging.",
      technologies: ["Node.js", "TypeScript", "Docker", "RabbitMQ", "GitHub Actions", "Jenkins", "SonarQube"],
      features: [
        "Role-based access control",
        "REST APIs with structured error handling and logging",
        "Docker-based microservices with RabbitMQ",
        "CI/CD with SonarQube static analysis gates"
      ],
      links: {},
      icon: <Factory size={24} />
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Backend systems, platform work, and side projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                </div>
                {(project.links.github || project.links.demo || project.links.portal) && (
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="View live site">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.links.portal && (
                        <a href={project.links.portal} target="_blank" rel="noopener noreferrer" aria-label="View tenant portal">
                          <Globe size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/michaelgrace72" target="_blank" rel="noopener noreferrer" className="cta-button">
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

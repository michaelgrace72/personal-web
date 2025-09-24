import React from 'react';
import { ExternalLink, Github, Calendar, CreditCard, Lock, Building2 } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "VoCalendar - AI-Powered Voice Calendar App",
      description: "Built calendar app with natural language voice commands in Bahasa Indonesia. Integrated GPT for scheduling and Firebase for real-time sync.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Firebase", "GPT API", "Dart", "Voice Recognition"],
      features: [
        "Natural language voice commands",
        "Bahasa Indonesia support",
        "GPT integration for scheduling",
        "Real-time Firebase sync"
      ],
      links: {
        github: "https://github.com/michaelgrace72/VoCalendar",
        demo: "#"
      },
      icon: <Calendar size={24} />
    },
    {
      title: "Credit Card Approval Prediction System",
      description: "Built ML app for real-time credit risk assessment using machine learning algorithms. Containerized system with Docker for scalable deployment.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "CatBoost", "Docker", "Machine Learning"],
      features: [
        "Real-time credit risk assessment",
        "CatBoost ML algorithm",
        "Containerized deployment",
        "RESTful API endpoints"
      ],
      links: {
        github: "https://github.com/michaelgrace72/CreditCardApprovalPrediction",
        demo: "#"
      },
      icon: <CreditCard size={24} />
    },
    {
      title: "Secure File Encryption Application",
      description: "Implemented AES/DES/RC4-based file encryption system with role-based access control and comprehensive activity logging for security auditing.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "PostgreSQL", "Cryptography", "JWT"],
      features: [
        "AES/DES/RC4 encryption algorithms",
        "Role-based access control",
        "Activity logging & auditing",
        "Secure file storage"
      ],
      links: {
        github: "https://github.com/michaelgrace72/Data-encryption-Flask",
        demo: "#"
      },
      icon: <Lock size={24} />
    },
    {
      title: "Manufacturing ERP System (HR Module)",
      description: "Developed secure ERP HR solution with role-based access control. Built CI/CD pipelines and implemented Docker-based microservices architecture.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "TypeScript", "Next.js", "MariaDB", "Docker", "GitHub Actions"],
      features: [
        "Role-based access control",
        "REST API with error handling",
        "CI/CD pipeline integration",
        "Microservices architecture"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      icon: <Building2 size={24} />
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing my software development and DevSecOps expertise</p>
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
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
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

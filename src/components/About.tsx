import React from 'react';
import { User, GraduationCap, MapPin, Calendar } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <User className="section-icon" size={32} />
              <div>
                <h3>Backend Engineer & Final-Year Computer Science Student</h3>
                <p>
                  I'm a backend engineer and final-year Informatics student at Institut Teknologi
                  Sepuluh Nopember (ITS). At the MCI Laboratory I work on Cerdas ERP, a multi-tenant
                  cooperative management platform, building Go services behind a Kong API gateway and
                  the CI/CD and observability that keep them shippable.
                </p>
              </div>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <GraduationCap size={24} />
                <div>
                  <h4>Education</h4>
                  <p>Bachelor of Computer Science (Informatics) - ITS</p>
                  <span>GPA 3.55 / 4.00 | Expected graduation Oct 2026 | ISC2 CC</span>
                </div>
              </div>

              <div className="detail-item">
                <MapPin size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Surabaya, Indonesia</p>
                  <span>Available for remote work</span>
                </div>
              </div>

              <div className="detail-item">
                <Calendar size={24} />
                <div>
                  <h4>Experience</h4>
                  <p>Backend Engineer at Manajemen Cerdas Informasi (MCI) Laboratory, ITS</p>
                  <span>Previously DevOps-focused Software Engineer & Laboratory Administrator</span>
                </div>
              </div>
            </div>

            <div className="about-philosophy">
              <h3>How I Work</h3>
              <blockquote>
                I try to build services that stay independently deployable and observable — clear
                boundaries, no reaching into another service's database, and enough logging and
                metrics to answer questions in production. I'd rather measure a change than assume
                it helped, so I load-test before claiming a system is fast.
              </blockquote>
            </div>
          </div>

          <div className="about-visual">
            <div className="tech-stack">
              <h3>Currently Working With</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Programming Languages</h4>
                  <div className="tech-items">
                    <span className="tech-item">Go</span>
                    <span className="tech-item">TypeScript</span>
                    <span className="tech-item">Python</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Platform & CI/CD</h4>
                  <div className="tech-items">
                    <span className="tech-item">Docker</span>
                    <span className="tech-item">GitLab CI/CD</span>
                    <span className="tech-item">Kong API Gateway</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Data & Messaging</h4>
                  <div className="tech-items">
                    <span className="tech-item">PostgreSQL</span>
                    <span className="tech-item">Redis</span>
                    <span className="tech-item">RabbitMQ</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Frameworks & Observability</h4>
                  <div className="tech-items">
                    <span className="tech-item">Node.js</span>
                    <span className="tech-item">Next.js</span>
                    <span className="tech-item">Prometheus + Grafana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

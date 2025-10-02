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
                <h3>DevSecOps Engineer & Computer Science Student</h3>
                <p>
                  I'm a passionate DevSecOps Engineer and Computer Science student at Institut Teknologi Sepuluh Nopember (ITS) 
                  with extensive experience in CI/CD, containerization, and security implementation. Currently in my 6th semester 
                  while working on ERP system development, infrastructure automation, and secure software development practices.
                </p>
              </div>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <GraduationCap size={24} />
                <div>
                  <h4>Education</h4>
                  <p>Bachelor of Computer Science (Informatics) - ITS</p>
                  <span>6th Semester | ISC2 Certified in Cybersecurity (CC)</span>
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
                  <p>Software Engineer at Smart Indicator Economy, ITS Lab</p>
                  <span>Laboratory Administrator & Technology Mentor</span>
                </div>
              </div>
            </div>

            <div className="about-philosophy">
              <h3>My Philosophy</h3>
              <blockquote>
                "Security is not a product, but a process. I believe in building secure, 
                scalable systems from the ground up, integrating security practices and 
                automation into every stage of the development lifecycle to create robust 
                and maintainable solutions."
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
                    <span className="tech-item">Python</span>
                    <span className="tech-item">JavaScript/TypeScript</span>
                    <span className="tech-item">Java</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>DevSecOps & Cloud</h4>
                  <div className="tech-items">
                    <span className="tech-item">Azure</span>
                    <span className="tech-item">Docker</span>
                    <span className="tech-item">GitHub Actions</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Backend & Databases</h4>
                  <div className="tech-items">
                    <span className="tech-item">Node.js</span>
                    <span className="tech-item">PostgreSQL</span>
                    <span className="tech-item">MariaDB</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Frameworks & Tools</h4>
                  <div className="tech-items">
                    <span className="tech-item">Flutter</span>
                    <span className="tech-item">Next.js</span>
                    <span className="tech-item">Flask</span>
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

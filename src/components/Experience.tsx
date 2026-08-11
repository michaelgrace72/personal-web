import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Users, Code, Server } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Backend Engineer',
      organization: 'Manajemen Cerdas Informasi (MCI) Laboratory, ITS',
      location: 'Surabaya, Indonesia',
      period: 'Jan 2025 - Present',
      description: 'Cerdas ERP — a multi-tenant cooperative (koperasi) management platform.',
      highlights: [
        'Architected and shipped a 16-service ERP platform (Go and TypeScript backends, 2 Next.js frontends) behind a Kong API gateway, applying Clean Architecture and a database-per-service pattern',
        'Load-tested to 1,000 concurrent virtual users — p95 357ms, 1,438 req/s, 0.02% error rate; cut p95 by 79% through Redis tenant caching and Kong upstream load balancing',
        'Built the Inventory service (Go, Hexagonal Architecture, 98 endpoints) with FIFO batch stock tracking, weighted-average costing, and multi-UOM conversion',
        'Decoupled Point of Sale from direct Inventory database access into a REST integration with a compensating-transaction rollback path, eliminating an overselling race condition',
        'Secured multi-tenant access with Kong, OAuth 2.0 reference tokens, and RFC 7662 token introspection, enforcing tenant scoping at the gateway rather than in application code',
        'Designed the Kubernetes deployment topology as the scale-out reference architecture; production shipped on client-mandated single-VPS Docker Compose',
        'Automated delivery across 20 repositories with a five-stage GitLab CI/CD pipeline and a registry-based build-once/pull-anywhere deploy model with one-click rollback, instrumented with Prometheus, Grafana, and Loki'
      ],
      icon: <Code size={24} />
    },
    {
      type: 'work',
      title: 'Software Engineer (DevOps Focus) & Laboratory Administrator',
      organization: 'Manajemen Cerdas Informasi (MCI) Laboratory, ITS',
      location: 'Surabaya, Indonesia',
      period: 'Sep 2024 - Jul 2026',
      description: 'Lab infrastructure, delivery pipelines, and internal ERP development.',
      highlights: [
        'Built and provisioned a 5-machine on-premise compute cluster from bare metal — 3 RTX 5080 nodes for distributed computing, 1 Quadro RTX 8000 workstation for heavy ML workloads, and 1 Lenovo ThinkSystem SR550 rack server',
        'Operated the SR550 as the lab deployment host for Cerdas ERP and other research services, dispatching GPU-bound ML jobs to the RTX nodes',
        'Built and maintained CI/CD pipelines with GitHub Actions and Jenkins, adding SonarQube static analysis gates to the build stage',
        'Developed a manufacturing ERP in Node.js/TypeScript (Portal Access and HRM modules) with role-based access control, REST APIs, structured error handling, and logging',
        'Containerized Portal Access and ERP services as Docker-based microservices with RabbitMQ messaging'
      ],
      icon: <Server size={24} />
    },
    {
      type: 'work',
      title: 'Coding Instructor',
      organization: 'Timedoor Academy',
      location: 'Surabaya, Indonesia',
      period: 'Nov 2025 - Jun 2026',
      description: 'Programming and digital literacy for children and teenagers.',
      highlights: [
        'Taught 20+ students across 11 small-group classes (2–5 students each) using Scratch, Construct 3, Roblox Studio (Lua), App Inventor, HTML/CSS/JavaScript, and Python',
        'Mentored students end-to-end through personal projects — 2D/3D games, mobile applications, and interactive websites',
        'Authored structured progress reports and led Parent–Teacher Meetings to present outcomes and recommend learning paths'
      ],
      icon: <Users size={24} />
    },
    {
      type: 'work',
      title: 'Technology Mentor',
      organization: 'Schematics Bootcamp',
      location: 'Surabaya, Indonesia',
      period: '2023',
      description: 'Mentored participants through "Python Programming for Beginners".',
      highlights: [
        'Mentored bootcamp participants in Python programming fundamentals'
      ],
      icon: <Users size={24} />
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science (Informatics)',
      organization: 'Institut Teknologi Sepuluh Nopember (ITS)',
      location: 'Surabaya, Indonesia',
      period: '2022 - Present',
      description: 'GPA 3.55 / 4.00 — expected graduation October 2026.',
      highlights: [
        'Relevant coursework: Software Engineering, Database Systems',
        'Network Security and Operating Systems',
        'Active in laboratory and research activities at MCI Laboratory'
      ],
      icon: <BookOpen size={24} />
    }
  ];

  const certifications = [
    {
      name: 'ISC2 Certified in Cybersecurity (CC)',
      issuer: 'ISC2 — cybersecurity fundamentals, risk management, network security, and incident response',
      status: 'Certified',
      year: '2023'
    }
  ];

  const achievements = [
    {
      title: 'Cerdas ERP Platform',
      description: '16-service multi-tenant ERP shipped to production behind a Kong API gateway; load-tested to 1,000 concurrent users at p95 357ms',
      year: '2025 - 2026'
    },
    {
      title: 'On-Premise GPU Compute Cluster',
      description: 'Provisioned a 5-machine lab cluster from bare metal and ran it as the deployment host for research services',
      year: '2024 - 2026'
    },
    {
      title: 'VoCalendar - AI Voice Calendar',
      description: 'Flutter app with GPT integration for Bahasa Indonesia voice commands and Firebase real-time sync',
      year: '2024'
    },
    {
      title: 'Secure File Encryption System',
      description: 'AES/DES/RC4 file encryption service with role-based access control and activity audit logging',
      year: '2023'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My journey in backend and platform engineering</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-organization">{exp.organization}</span>
                    <div className="timeline-details">
                      <span className="timeline-period">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="timeline-location">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="credentials-section">
          <div className="certifications">
            <h3>Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-header">
                    <h4>{cert.name}</h4>
                    <span className={`cert-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements">
            <h3>Key Projects & Achievements</h3>
            <div className="achievement-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">
                    <Award size={20} />
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

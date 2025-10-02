import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Users, Code } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer (DevSecOps Focus)',
      organization: 'Smart Indicator Economy, ITS Lab',
      location: 'Surabaya, Indonesia',
      period: 'May 2025 - Present',
      description: 'Building CI/CD pipelines and implementing Docker-based microservices for ERP HR module development.',
      highlights: [
        'Built CI/CD pipelines using GitHub Actions and Jenkins',
        'Implemented Docker-based microservices for ERP HR module',
        'Developed ERP system using Node.js (TypeScript) and Next.js',
        'Integrated MariaDB with automated backup and monitoring',
        'Reduced deployment time with automated testing workflows'
      ],
      icon: <Code size={24} />
    },
    {
      type: 'work',
      title: 'Laboratory Administrator',
      organization: 'ITS Informatics Department',
      location: 'Surabaya, Indonesia',
      period: '2023 - Present',
      description: 'Managing lab infrastructure and computing resources for the Informatics Department.',
      highlights: [
        'Managed lab infrastructure and computing resources',
        'Maintained Linux-based systems and network configurations',
        'Supervised lab equipment and user access management',
        'Provided technical support for students and faculty'
      ],
      icon: <Users size={24} />
    },
    {
      type: 'work',
      title: 'Technology Mentor',
      organization: 'Schematics Bootcamp',
      location: 'Surabaya, Indonesia',
      period: '2023',
      description: 'Mentored students in programming and web development fundamentals.',
      highlights: [
        'Mentored students in programming fundamentals',
        'Taught web development best practices',
        'Provided guidance on project development',
        'Conducted code reviews and technical assessments'
      ],
      icon: <Users size={24} />
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science (Informatics)',
      organization: 'Institut Teknologi Sepuluh Nopember (ITS)',
      location: 'Surabaya, Indonesia',
      period: '2022 - Present',
      description: 'Currently in 6th semester, focusing on software engineering, database systems, network security, and operating systems.',
      highlights: [
        'Relevant coursework: Software Engineering, Database Systems',
        'Network Security and Operating Systems specialization',
        'Active in laboratory and research activities',
        'Strong foundation in computer science fundamentals'
      ],
      icon: <BookOpen size={24} />
    }
  ];

  const certifications = [
    {
      name: 'ISC2 Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      status: 'Certified',
      year: '2023'
    },
    {
      name: 'Azure Cloud Computing',
      issuer: 'Microsoft Azure',
      status: 'In Progress',
      year: '2025'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      status: 'Planned',
      year: '2025'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker',
      status: 'Planned',
      year: '2025'
    }
  ];

  const achievements = [
    {
      title: 'VoCalendar - AI Voice Calendar',
      description: 'Built innovative Flutter app with GPT integration for Bahasa Indonesia voice commands',
      year: '2024'
    },
    {
      title: 'Credit Card ML Prediction System',
      description: 'Developed containerized machine learning application for real-time credit risk assessment',
      year: '2024'
    },
    {
      title: 'Secure File Encryption System',
      description: 'Implemented AES/DES/RC4 encryption with role-based access control',
      year: '2023'
    },
    {
      title: 'ERP HR Module Development',
      description: 'Built secure ERP solution with microservices architecture and CI/CD integration',
      year: '2025'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My journey in DevSecOps and software development</p>
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
            <h3>Certifications & Learning Path</h3>
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

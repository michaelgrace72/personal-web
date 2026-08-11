import React from 'react';
import {
  Code2,
  Layers,
  Database,
  GitBranch,
  Lock,
  Server,
  Activity,
  Boxes,
  Gauge,
  ShieldCheck
} from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={32} />,
      skills: ["Go", "Python", "TypeScript/JavaScript", "Java", "C/C++", "Dart", "SQL"]
    },
    {
      title: "Architecture & Backend",
      icon: <Layers size={32} />,
      skills: [
        "Microservices",
        "Clean Architecture",
        "Hexagonal Architecture",
        "REST APIs",
        "Database-per-Service",
        "Multi-Tenancy",
        "Node.js",
        "Flask"
      ]
    },
    {
      title: "API Gateway & Security",
      icon: <Lock size={32} />,
      skills: [
        "Kong API Gateway",
        "OAuth 2.0",
        "Token Introspection (RFC 7662)",
        "Role-Based Access Control",
        "Data Encryption (AES/DES/RC4)"
      ]
    },
    {
      title: "Containers & CI/CD",
      icon: <GitBranch size={32} />,
      skills: [
        "Docker",
        "Docker Compose",
        "GitLab CI/CD",
        "GitHub Actions",
        "Jenkins",
        "SonarQube",
        "Kubernetes (design-level)"
      ]
    },
    {
      title: "Observability & Testing",
      icon: <Activity size={32} />,
      skills: [
        "Prometheus",
        "Grafana",
        "Grafana Loki",
        "cAdvisor",
        "Node Exporter",
        "k6 Load Testing"
      ]
    },
    {
      title: "Databases & Messaging",
      icon: <Database size={32} />,
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "RabbitMQ"]
    },
    {
      title: "Infrastructure & Systems",
      icon: <Server size={32} />,
      skills: [
        "Linux",
        "Bare-Metal Server Provisioning",
        "GPU Compute Infrastructure (NVIDIA RTX/Quadro)",
        "Network Configuration",
        "Azure",
        "Terraform (personal projects)",
        "Git",
        "Postman"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Grouped as they appear on my CV</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3>Areas of Focus</h3>
          <div className="focus-areas">
            <div className="focus-item">
              <Boxes size={24} />
              <span>Go Microservices & Clean Architecture</span>
            </div>
            <div className="focus-item">
              <ShieldCheck size={24} />
              <span>Multi-Tenant Platform Design</span>
            </div>
            <div className="focus-item">
              <GitBranch size={24} />
              <span>CI/CD & Containerization</span>
            </div>
            <div className="focus-item">
              <Gauge size={24} />
              <span>Observability & Load Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

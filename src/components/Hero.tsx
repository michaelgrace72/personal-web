import React from 'react';
import { Github, Linkedin, Mail, Download, Shield, Boxes } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Mikha Gracia Sugiono</span>
            </h1>
            <h2 className="hero-subtitle">
              Backend Engineer — <span className="highlight">Go Microservices</span> & Multi-Tenant Platforms
            </h2>
            <p className="hero-description">
              I build backend services in Go and TypeScript, with a focus on multi-tenant
              platform architecture. Most recently I helped ship a 16-service ERP platform to
              production, working across GitLab CI/CD, Docker, and Prometheus/Grafana/Loki
              observability, on a security foundation of OAuth 2.0 and role-based access control.
            </p>

            <div className="hero-badges">
              <div className="badge">
                <Boxes size={20} />
                <span>Go Microservices</span>
              </div>
              <div className="badge">
                <Shield size={20} />
                <span>ISC2 CC Certified</span>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn-primary" href="/cv-mikha-gracia.pdf" download>
                <Download size={20} />
                Download CV
              </a>
              <button className="btn-secondary" onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get In Touch
              </button>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/michaelgrace72" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mikha-gracia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:mikhagracia72@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn red"></span>
                  <span className="btn yellow"></span>
                  <span className="btn green"></span>
                </div>
                <span className="terminal-title">mikha@kali:~$</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">┌──(mikha㉿kali)-[~]</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">└─$</span>
                  <span className="command"> whoami</span>
                </div>
                <div className="terminal-line">
                  <span className="output">Backend Engineer — Go microservices</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">└─$</span>
                  <span className="command"> cat stack.txt</span>
                </div>
                <div className="terminal-line">
                  <span className="output">Go | TypeScript | PostgreSQL | Redis | Docker</span>
                </div>
                <div className="terminal-line">
                  <span className="output">Kong Gateway | GitLab CI/CD | Prometheus + Grafana</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">└─$</span>
                  <span className="command typing"> k6 run load-test.js</span>
                </div>
                <div className="terminal-line">
                  <span className="output">1,000 VUs · p95 357ms · 0.02% errors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

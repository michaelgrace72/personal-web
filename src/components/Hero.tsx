import React from 'react';
import { Github, Linkedin, Mail, Download, Shield, Network } from 'lucide-react';
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
              Computer Science Student & <span className="highlight">DevSecOps</span> Enthusiast
            </h2>
            <p className="hero-description">
              Passionate about cybersecurity, infrastructure automation, and building secure, 
              scalable systems. Specializing in DevSecOps practices with hands-on experience 
              in network security, containerization, and CI/CD pipelines.
            </p>
            
            <div className="hero-badges">
              <div className="badge">
                <Shield size={20} />
                <span>Security Focused</span>
              </div>
              <div className="badge">
                <Network size={20} />
                <span>Network Expert</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary">
                <Download size={20} />
                Download CV
              </button>
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
                  <span className="output">DevSecOps Engineer</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">└─$</span>
                  <span className="command"> cat skills.txt</span>
                </div>
                <div className="terminal-line">
                  <span className="output">Bash | Linux | Docker | Jenkins | Web Dev</span>
                </div>
                <div className="terminal-line">
                  <span className="output">GitLab CI/CD | Network Security | Forensics</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">└─$</span>
                  <span className="command typing"> nmap -sV localhost</span>
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

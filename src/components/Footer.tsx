import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Mikha Gracia Sugiono</h3>
              <p>Backend Engineer | Go Microservices & Multi-Tenant Platforms</p>
            </div>
            <div className="footer-description">
              <p>
                Building backend services in Go and TypeScript, and the CI/CD and
                observability that keep them shippable. Always learning, always growing.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Technologies</h4>
            <div className="footer-tech">
              <span>Go</span>
              <span>TypeScript</span>
              <span>Docker</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>Kong</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/michaelgrace72" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mikha-gracia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mikhagracia72@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="footer-contact-info">
              <p>mikhagracia72@gmail.com</p>
              <p>Surabaya, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Mikha Gracia Sugiono. Made with <Heart size={16} className="heart" /> using React & TypeScript.
            </p>
          </div>
          <div className="footer-extras">
            <span className="footer-status">
              <div className="status-dot"></div>
              Available for opportunities
            </span>
          </div>
        </div>

        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img 
              src="https://media.licdn.com/dms/image/v2/C5603AQHVgysmDpjG1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661558100148?e=1761177600&v=beta&t=9x_N5w-vIwU0qitRBz5COirDi942338UoeMBuq6_ja8" 
              alt="Mikha Gracia Sugiono" 
              className="profile-pic"
              onClick={toggleModal}
            />
            <span>Mikha Gracia Sugiono</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Profile Picture Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              <X size={24} />
            </button>
            <div className="modal-profile">
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQHVgysmDpjG1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661558100148?e=1761177600&v=beta&t=9x_N5w-vIwU0qitRBz5COirDi942338UoeMBuq6_ja8" 
                alt="Mikha Gracia Sugiono" 
                className="modal-profile-pic"
              />
              <h3 className="modal-name">Mikha Gracia Sugiono</h3>
              <p className="modal-title">Computer Science Student & DevSecOps Enthusiast</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

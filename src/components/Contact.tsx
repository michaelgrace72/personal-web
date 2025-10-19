import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's collaborate on your next project or discuss cybersecurity opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities, challenging projects, 
                and collaborations in the cybersecurity and DevOps space. Whether 
                you have a project idea, internship opportunity, or just want to 
                discuss the latest in security trends, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>mikhagracia72@gmail.com</p>
                  <span>Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>+62 858 5396 9685</p>
                  <span>Available Mon-Fri 8AM-6PM</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={24} />
                </div>
                <div className="method-info">
                  <h4>Location</h4>
                  <p>Indonesia</p>
                  <span>Open to remote collaboration</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-grid">
                <a href="https://github.com/michaelgrace72" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/mikha-gracia/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={24} />
                  <span>Twitter</span>
                </a> */}
              </div>
            </div>

            <div className="availability">
              <h4>Current Availability</h4>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new opportunities</span>
              </div>
              <div className="availability-types">
                <span className="availability-type">Internships</span>
                <span className="availability-type">Project Collaboration</span>
                <span className="availability-type">Freelance Work</span>
                <span className="availability-type">Mentorship</span>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>

            <div className="form-note">
              <p>
                <strong>Note:</strong> I typically respond to messages within 24 hours. 
                For urgent matters, feel free to reach out via email directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

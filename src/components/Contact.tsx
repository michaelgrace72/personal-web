import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
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
    // No backend here — hand the message off to the visitor's mail client.
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:mikhagracia72@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Open to backend and platform engineering roles, projects, and collaboration</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm interested in backend and platform engineering work — Go services,
                multi-tenant architecture, CI/CD, and the observability around them. If you
                have a role, a project, or just want to compare notes on microservice design,
                I'd be glad to hear from you.
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
                  <span>Best way to reach me</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>+62 858 5396 9685</p>
                  <span>WhatsApp or call</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={24} />
                </div>
                <div className="method-info">
                  <h4>Location</h4>
                  <p>Surabaya, Indonesia</p>
                  <span>GMT+7 · open to remote collaboration</span>
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
                <span className="availability-type">Full-time (from Oct 2026)</span>
                <span className="availability-type">Internships</span>
                <span className="availability-type">Project Collaboration</span>
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
                Compose Email
              </button>
            </form>

            <div className="form-note">
              <p>
                <strong>Note:</strong> this form has no backend — it opens your own mail client
                with the message pre-filled. You can also email me directly at
                mikhagracia72@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

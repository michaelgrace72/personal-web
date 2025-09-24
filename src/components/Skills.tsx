import React from 'react';
import { 
  Shield, 
  Network, 
  Server, 
  Database, 
  GitBranch, 
  Monitor, 
  Lock, 
  Settings,
  Terminal,
  Globe,
  Container,
  Activity
} from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "DevSecOps & Security",
      icon: <Shield size={32} />,
      skills: [
        { name: "Security Auditing", level: 80 },
        { name: "Security Monitoring", level: 80 }
      ]
    },
    {
      title: "Networking & Infrastructure",
      icon: <Network size={32} />,
      skills: [
        { name: "Forward Proxy", level: 90 },
        { name: "Reverse Proxy", level: 88 },
        { name: "Load Balancer", level: 70 },
        { name: "Firewall Configuration", level: 70 }
      ]
    },
    {
      title: "System Administration",
      icon: <Terminal size={32} />,
      skills: [
        { name: "Bash Scripting", level: 85 },
        { name: "Linux Administration", level: 90 },
        { name: "Unix Operations", level: 80 },
        { name: "Kali Linux", level: 90 }
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: <GitBranch size={32} />,
      skills: [
        { name: "Jenkins", level: 70 },
        { name: "GitLab CI/CD", level: 80 },
        { name: "Docker", level: 90 },
        { name: "Application Monitoring", level: 80 }
      ]
    },
    {
      title: "Web Services",
      icon: <Globe size={32} />,
      skills: [
        { name: "Web Server Management", level: 80 },
        { name: "Caching Server", level: 70 },
        { name: "Nginx", level: 90 },
        { name: "Apache", level: 80 }
      ]
    },
    {
      title: "Version Control & Hosting",
      icon: <Database size={32} />,
      skills: [
        { name: "Git", level: 92 },
        { name: "GitHub", level: 90 },
        { name: "GitLab", level: 70 },
        { name: "Container Orchestration", level: 70 }
      ]
    }
  ];

  const tools = [
    { name: "Kali Linux", category: "OS" },
    { name: "Docker", category: "Container" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "Nmap", category: "Security" },
    { name: "Wireshark", category: "Network" },
    { name: "Metasploit", category: "Security" },
    { name: "GitLab", category: "VCS" },
    { name: "Nginx", category: "Web Server" },
    { name: "iptables", category: "Firewall" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Monitoring" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>My technical competencies and areas of specialization</p>
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
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3>Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-category">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3>Areas of Focus</h3>
          <div className="focus-areas">
            <div className="focus-item">
              <Container size={24} />
              <span>Containerization & Orchestration</span>
            </div>
            <div className="focus-item">
              <Activity size={24} />
              <span>Network Security & Monitoring</span>
            </div>
            <div className="focus-item">
              <Lock size={24} />
              <span>Secure Development Practices</span>
            </div>
            <div className="focus-item">
              <Settings size={24} />
              <span>Infrastructure Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

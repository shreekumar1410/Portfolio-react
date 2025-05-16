import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Shree Kumar</h3>
            <p>Full Stack Developer passionate about building web applications.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
                          <a 
                            href="www.linkedin.com/in/shree-kumar-mb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                            data-tooltip="LinkedIn"
                          >
                            <FaLinkedin />
                          </a>
                          <a 
                            href="https://github.com/shreekumar1410" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                            data-tooltip="GitHub"
                          >
                            <FaGithub />
                          </a>
                          <a 
                            href="https://x.com/ShreeKumar91905" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                            data-tooltip="Twitter"
                          >
                            <FaTwitter />
                          </a>
                          <a 
                            href="https://www.youtube.com/@shreekumarmb9924" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-icon"
                            data-tooltip="YouTube"
                          >
                            <FaYoutube />
                          </a>
                        </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shree Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
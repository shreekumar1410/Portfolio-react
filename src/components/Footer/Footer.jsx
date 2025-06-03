import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: 'https://github.com/shreekumar1410',
      tooltip: 'GitHub'
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourprofile',
      tooltip: 'LinkedIn'
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourprofile',
      tooltip: 'Twitter'
    },
    {
      id: 4,
      icon: <FaYoutube />,
      url: 'https://youtube.com/yourchannel',
      tooltip: 'YouTube'
    }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Shree Kumar</h2>
            <p>Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-tooltip-id={`footer-tooltip-${link.id}`}
                  data-tooltip-content={link.tooltip}
                >
                  {link.icon}
                  <Tooltip
                    id={`footer-tooltip-${link.id}`}
                    className="footer-tooltip"
                    place="top"
                    effect="solid"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by Shree Kumar | &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll and scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add smooth scroll to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      });
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" className="focus-visible">Shree Kumar</a>
          </div>
          
          <button 
            className="menu-toggle focus-visible"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul>
              <li><a href="#about" className="focus-visible">About</a></li>
              <li><a href="#skills" className="focus-visible">Skills</a></li>
              <li><a href="#projects" className="focus-visible">Projects</a></li>
              <li><a href="#contact" className="focus-visible">Contact</a></li>
              <li>
                <button 
                  onClick={toggleDarkMode}
                  className="theme-toggle focus-visible"
                  aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                >
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
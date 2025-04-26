import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faCode,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './SidebarNav.css';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const SidebarNav = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', icon: faHome, href: '#home' },
    { name: 'About', icon: faUser, href: '#about' },
    { name: 'Skills', icon: faCode, href: '#skills' },
    { name: 'Projects', icon: faProjectDiagram, href: '#projects' },
    { name: 'Contact', icon: faEnvelope, href: '#contact' }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <button onClick={toggleSidebar} className="toggle-btn">
              <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={closeMobileMenu}
                    data-tooltip-id="sidebar-tooltip"
                    data-tooltip-content={item.name}
                    data-tooltip-place="right"
                  >
                    <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                    {isOpen && <span className="nav-text">{item.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="theme-toggle-sidebar">
            <button 
              onClick={toggleDarkMode} 
              className="theme-toggle-btn"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              {isOpen && <span className="theme-toggle-text">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>}
            </button>
          </div>
          
          {/* Tooltip for closed sidebar */}
          {!isOpen && (
            <Tooltip
              id="sidebar-tooltip"
              className="sidebar-tooltip"
              variant={darkMode ? 'dark' : 'light'}
            />
          )}
        </aside>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <header className="mobile-navbar">
          <div className="mobile-nav-name">Shree Kumar</div>
          <div className="mobile-nav-controls">
            <button 
              onClick={toggleDarkMode} 
              className="theme-toggle-btn"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
            <button 
              onClick={toggleMobileMenu} 
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className="mobile-nav">
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="mobile-nav-link"
                      onClick={closeMobileMenu}
                    >
                      <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>
      )}

      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default SidebarNav;
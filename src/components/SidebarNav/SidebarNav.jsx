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
  faMoon,
  faSun,
  faGraduationCap, 
  faBriefcase 
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './SidebarNav.css';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import EducationExperience from '../EducationExperience/EducationExperience';

const SidebarNav = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      console.log(`Scroll position: ${scrollPosition}`);

      for (const section of sections) {
        const element = document.getElementById(section);
        console.log(`Element ID: ${section}`);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          console.log(`Section: ${section}, Offset Top: ${offsetTop}, Offset Height: ${offsetHeight}`);

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            // console.log(`Active section: ${section}`);
            break;
          }
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize active section
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', icon: faHome, href: '#home', section: 'home' },
    { name: 'About', icon: faUser, href: '#about', section: 'about' },
    { name: 'Education', icon: faGraduationCap, href: '#education', section: 'education' },
    { name: 'Skills', icon: faCode, href: '#skills', section: 'skills' },
    { name: 'Projects', icon: faProjectDiagram, href: '#projects', section: 'projects' },
    { name: 'Contact', icon: faEnvelope, href: '#contact', section: 'contact' }
];

  const handleSidebarHover = (hoverState) => {
    if (!isMobile) {
      setIsOpen(hoverState);
    }
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside 
          className={`sidebar ${isOpen ? 'open' : 'closed'}`}
          onMouseEnter={() => handleSidebarHover(true)}
          onMouseLeave={() => handleSidebarHover(false)}
        >
          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
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
                      className={`mobile-nav-link ${activeSection === item.section ? 'active' : ''}`}
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
        <EducationExperience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default SidebarNav;
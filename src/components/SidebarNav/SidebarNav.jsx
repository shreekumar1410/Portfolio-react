import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faUser, faCode, faProjectDiagram, 
  faEnvelope, faBars, faTimes, faMoon, faSun, faGraduationCap 
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import './SidebarNav.css';
import Home from '../Home/Home';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import EducationExperience from '../EducationExperience/EducationExperience';

// Professional animation variants with smooth easing
const sidebarVariants = {
  open: { 
    width: '250px',
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  },
  closed: { 
    width: '80px',
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

const navItemVariants = {
  open: { 
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  closed: { 
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const mobileMenuVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      when: "beforeChildren"
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  }
};

const mobileItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  closed: {
    y: -15,
    opacity: 0,
    scale: 0.95,
    transition: { 
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Smooth theme toggle animation
const themeToggleVariants = {
  initial: { 
    y: -20, 
    opacity: 0, 
    scale: 0.8,
    rotate: -180
  },
  animate: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: { 
    y: 20, 
    opacity: 0, 
    scale: 0.8,
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const SidebarNav = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'technologies', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
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
    { name: 'Technologies', icon: faCode, href: '#technologies', section: 'technologies' },
    { name: 'Projects', icon: faProjectDiagram, href: '#projects', section: 'projects' },
    { name: 'Contact', icon: faEnvelope, href: '#contact', section: 'contact' }
  ];

  const handleSidebarHover = (hoverState) => {
    if (!isMobile) setIsOpen(hoverState);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.aside 
          className={`sidebar ${isOpen ? 'open' : 'closed'}`}
          onMouseEnter={() => handleSidebarHover(true)}
          onMouseLeave={() => handleSidebarHover(false)}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={sidebarVariants}
        >
          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  variants={navItemVariants}
                  animate={isOpen ? 'open' : 'closed'}
                  transition={{ 
                    delay: isOpen ? index * 0.05 : 0
                  }}
                >
                  <motion.a 
                    href={item.href} 
                    className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                    data-tooltip-id="sidebar-tooltip"
                    data-tooltip-content={item.name}
                    data-tooltip-place="right"
                    whileHover={{ 
                      scale: 1.05,
                      x: 0,
                      transition: { 
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="nav-icon" 
                      style={{ fontSize: isOpen ? '1rem' : '1.2rem' }}
                    />
                    <AnimatePresence>
                      {isOpen && (
                        <motion.span 
                          className="nav-text"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              delay: 0.15,
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }}
                          exit={{ 
                            opacity: 0, 
                            x: -10,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div 
            className="theme-toggle-sidebar"
            variants={navItemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <motion.button 
              onClick={toggleDarkMode}
              className="theme-toggle-btn"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              whileHover={{ 
                scale: 1.1,
                transition: { 
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? 'dark' : 'light'}
                  variants={themeToggleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </motion.span>
              </AnimatePresence>
              <AnimatePresence>
                {isOpen && (
                  <motion.span 
                    className="theme-toggle-text"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.15,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
          
          {!isOpen && (
            <Tooltip
              id="sidebar-tooltip"
              className="sidebar-tooltip"
              variant={darkMode ? 'dark' : 'light'}
            />
          )}
        </motion.aside>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <motion.header 
          className="mobile-navbar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
        >
          <div className="mobile-nav-name">Shree Kumar</div>
          <div className="mobile-nav-controls">
            <motion.button 
              onClick={toggleDarkMode} 
              className="theme-toggle-btn"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? 'dark' : 'light'}
                  variants={themeToggleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <motion.button 
              onClick={toggleMobileMenu} 
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ 
                    rotate: 0, 
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  exit={{ 
                    rotate: 180, 
                    opacity: 0,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav 
                className="mobile-nav"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
              >
                <ul>
                  {navItems.map((item) => (
                    <motion.li 
                      key={item.name}
                      variants={mobileItemVariants}
                    >
                      <motion.a 
                        href={item.href} 
                        className={`mobile-nav-link ${activeSection === item.section ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                        whileHover={{ 
                          scale: 1.05,
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
                        <span>{item.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}

      <main className="main-content">
        <Home />
        <About />
        <EducationExperience />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default SidebarNav;
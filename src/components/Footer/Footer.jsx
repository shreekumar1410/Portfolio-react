import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { 
  footerSlideUp,
  footerContainer,
  footerLinkSlide,
  footerSocialIcon
} from '../../utils/animations';
import './Footer.css';

// Professional footer animation configuration
const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-40px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const Footer = () => {
  // Custom scroll function that accounts for mobile header height
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 60 : 0; // Mobile header height is 60px
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: 'https://github.com/shreekumar1410',
      tooltip: 'GitHub',
      color: '#333'
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/shree-kumar-mb',
      tooltip: 'LinkedIn',
      color: '#0A66C2'
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: 'https://x.com/ShreeKumar91905',
      tooltip: 'Twitter',
      color: '#1DA1F2'
    },
    {
      id: 4,
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@shreekumarmb9924',
      tooltip: 'YouTube',
      color: '#FF0000'
    }
  ];

  return (
    <motion.footer
      className="footer-section"
      {...animationConfig}
      variants={footerContainer}
    >
      <div className="container">
        <motion.div 
          className="footer-content"
          {...animationConfig}
          variants={footerContainer}
        >
          <motion.div 
            className="footer-logo"
            {...animationConfig}
            variants={footerSlideUp}
          >
            <motion.h2 
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              Shree Kumar
            </motion.h2>
            <motion.p 
              {...animationConfig}
              variants={footerSlideUp}
              transition={{ ...animationConfig.transition, delay: 0.1 }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          <motion.div 
            className="footer-links"
            {...animationConfig}
            variants={footerSlideUp}
            transition={{ ...animationConfig.transition, delay: 0.1 }}
          >
            <motion.h3
              {...animationConfig}
              variants={footerSlideUp}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              {...animationConfig}
              variants={footerContainer}
            >
              {['home', 'about', 'projects', 'contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  {...animationConfig}
                  variants={footerLinkSlide}
                  transition={{ 
                    ...animationConfig.transition, 
                    delay: index * 0.15 
                  }}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <button 
                    onClick={() => scrollToSection(link)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontFamily: 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="footer-social"
            {...animationConfig}
            variants={footerSlideUp}
            transition={{ ...animationConfig.transition, delay: 0.2 }}
          >
            <motion.h3
              {...animationConfig}
              variants={footerSlideUp}
            >
              Connect With Me
            </motion.h3>
            <motion.div 
              className="social-icons"
              {...animationConfig}
              variants={footerContainer}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-tooltip-id={`footer-tooltip-${link.id}`}
                  data-tooltip-content={link.tooltip}
                  {...animationConfig}
                  variants={footerSocialIcon}
                  transition={{ 
                    ...animationConfig.transition, 
                    delay: index * 0.2 
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.2,
                    color: link.color,
                    transition: { 
                      duration: 0.2,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    transition: { duration: 0.1 }
                  }}
                >
                  {link.icon}
                  <Tooltip
                    id={`footer-tooltip-${link.id}`}
                    className="footer-tooltip"
                    place="top"
                    effect="solid"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          {...animationConfig}
          variants={footerSlideUp}
          transition={{ ...animationConfig.transition, delay: 0.3 }}
        >
          <motion.p
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Made with <motion.span 
              className="heart-icon"
              animate={{ 
                scale: [1, 1.2, 1],
                transition: { 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }
              }}
            ><FaHeart /></motion.span> by Shree Kumar | &copy; {new Date().getFullYear()} All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
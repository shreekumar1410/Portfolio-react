import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { 
  containerVariants, 
  itemVariants, 
  fadeIn,
  scaleUp
} from '../../utils/animations';
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
      url: 'https://linkedin.com/in/shree-kumar-mb',
      tooltip: 'LinkedIn'
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: 'https://x.com/ShreeKumar91905',
      tooltip: 'Twitter'
    },
    {
      id: 4,
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@shreekumarmb9924',
      tooltip: 'YouTube'
    }
  ];

  return (
    <motion.footer
      className="footer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
        >
          <motion.div 
            className="footer-logo"
            variants={itemVariants}
          >
            <motion.h2 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Shree Kumar
            </motion.h2>
            <motion.p variants={fadeIn}>Full Stack Developer</motion.p>
          </motion.div>

          <motion.div 
            className="footer-links"
            variants={itemVariants}
          >
            <h3>Quick Links</h3>
            <motion.ul variants={containerVariants}>
              {['home', 'about', 'projects', 'contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a href={`#${link}`}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="footer-social"
            variants={itemVariants}
          >
            <h3>Connect With Me</h3>
            <motion.div 
              className="social-icons"
              variants={containerVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  data-tooltip-id={`footer-tooltip-${link.id}`}
                  data-tooltip-content={link.tooltip}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.2,
                    color: 'var(--primary-color)'
                  }}
                  whileTap={{ scale: 0.9 }}
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
          variants={fadeIn}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
          >
            Made with <motion.span 
              className="heart-icon"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ><FaHeart /></motion.span> by Shree Kumar | &copy; {new Date().getFullYear()} All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
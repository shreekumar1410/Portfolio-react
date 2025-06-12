import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { 
  containerVariants, 
  itemVariants, 
  fadeIn,
  slideInFromLeft,
  slideInFromRight
} from '../../utils/animations';
import MyPhoto from '../../assets/images/My_New_Photo.png';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
        >
          <motion.div 
            className="about-text"
            variants={slideInFromLeft}
          >
            <motion.p variants={fadeIn}>
              <strong>Hi, I'm Shree Kumar!</strong><br />
              A creative Frontend & Web Developer from Chennai, passionate about 
              building interactive, user-friendly websites and applications. With a degree in 
              Information Technology and expertise in HTML, CSS, JavaScript, Python, SQL, and React, 
              I love turning ideas into functional and visually appealing digital experiences.
            </motion.p>
            <motion.p variants={fadeIn}>
              As a fresher, I bring fresh perspectives, a problem-solving mindset, and a hunger to 
              learn and grow in the ever-evolving world of web development. Whether it's debugging 
              code, optimizing performance, or crafting responsive designs, I thrive on challenges 
              that push me to innovate.
            </motion.p>
            
            <motion.div 
              className="about-info"
              variants={containerVariants}
            >
              <motion.div 
                className="info-item"
                variants={itemVariants}
              >
                <span>Name:</span>
                <p>Shree Kumar MB</p>
              </motion.div>
              <motion.div 
                className="info-item"
                variants={itemVariants}
              >
                <span>Email:</span>
                <p>shreekumarmb@gmail.com</p>
              </motion.div>
              <motion.div 
                className="info-item"
                variants={itemVariants}
              >
                <span>Experience:</span>
                <p>Fresher</p>
              </motion.div>
              <motion.div 
                className="info-item"
                variants={itemVariants}
              >
                <span>From:</span>
                <p>Chennai, India</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-image"
            variants={slideInFromRight}
          >
            <motion.div 
              className="image-wrapper"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <LazyLoadImage
                src={MyPhoto}
                alt="Shree Kumar"
                effect="blur"
                width="100%"
                height="auto"
                className="profile-photo"
              />
            </motion.div>
            
            <motion.div 
              className="social_links"
              variants={containerVariants}
            >
              <motion.a 
                href="https://www.linkedin.com/in/shree-kumar-mb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="LinkedIn"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/shreekumar1410" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="GitHub"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://x.com/ShreeKumar91905" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="Twitter"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@shreekumarmb9924" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="YouTube"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
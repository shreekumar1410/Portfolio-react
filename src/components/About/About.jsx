import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { 
  fadeInWithSlideUp, // New unified animation variant
  slideInFromLeft, 
  scaleUpWithFade
} from '../../utils/animations';
import MyPhoto from '../../assets/images/My_New_Photo.png';
import './About.css';

// Animation configuration
const animationSettings = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      {...animationSettings}
      variants={{
        visible: { 
          transition: { 
            staggerChildren: 0.1,
            when: "beforeChildren"
          } 
        }
      }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          {...animationSettings}
          variants={fadeInWithSlideUp}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          {...animationSettings}
          transition={{ ...animationSettings.transition, staggerChildren: 0.1 }}
        >
          {/* Text Content - Left Side */}
          <motion.div 
            className="about-text"
            {...animationSettings}
            variants={fadeInWithSlideUp}
          >
            <motion.strong
              {...animationSettings}
              variants={fadeInWithSlideUp}
              transition={{ ...animationSettings.transition }}
            >
              Hi, I'm Shree Kumar!
            </motion.strong>
            
            <motion.p 
              {...animationSettings}
              variants={fadeInWithSlideUp}
              transition={{ ...animationSettings.transition, delay: 0.1 }}
            >
              A creative Frontend & Web Developer from Chennai, passionate about 
              building interactive, user-friendly websites and applications. With a degree in 
              Information Technology and expertise in HTML, CSS, JavaScript, Python, SQL, and React, 
              I love turning ideas into functional and visually appealing digital experiences.
            </motion.p>
            
            <motion.p 
              {...animationSettings}
              variants={fadeInWithSlideUp}
              transition={{ ...animationSettings.transition, delay: 0.3 }}
            >
              As a fresher, I bring fresh perspectives, a problem-solving mindset, and a hunger to 
              learn and grow in the ever-evolving world of web development. Whether it's debugging 
              code, optimizing performance, or crafting responsive designs, I thrive on challenges 
              that push me to innovate.
            </motion.p>
            
            <motion.div 
              className="about-info"
              {...animationSettings}
              variants={fadeInWithSlideUp}
              transition={{ ...animationSettings.transition, delay: 0.4, staggerChildren: 0.1 }}
            >
              {[
                { label: 'Name:', value: 'Shree Kumar MB' },
                { label: 'Email:', value: 'shreekumarmb@gmail.com' },
                { label: 'Experience:', value: 'Fresher' },
                { label: 'From:', value: 'Chennai, India' }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="info-item"
                  variants={fadeInWithSlideUp}
                  transition={{ ...animationSettings.transition, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content - Right Side */}
          <motion.div 
            className="about-image"
            {...animationSettings}
            variants={scaleUpWithFade}
            transition={{ ...animationSettings.transition, delay: 0.4 }}
          >
            <motion.div 
              className="image-wrapper"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 10
              }}
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
              {...animationSettings}
              variants={fadeInWithSlideUp}
              transition={{ ...animationSettings.transition, delay: 0.5, staggerChildren: 0.1 }}
            >
              {[
                { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/shree-kumar-mb/', color: '#0A66C2' },
                { icon: <FaGithub />, url: 'https://github.com/shreekumar1410', color: '#333' },
                { icon: <FaTwitter />, url: 'https://x.com/ShreeKumar91905', color: '#1DA1F2' },
                { icon: <FaYoutube />, url: 'https://www.youtube.com/@shreekumarmb9924', color: '#FF0000' }
              ].map((social, index) => (
                <motion.a 
                  key={social.url}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  variants={fadeInWithSlideUp}
                  transition={{ ...animationSettings.transition, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.1,
                    color: social.color,
                    transition: { type: 'spring' }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
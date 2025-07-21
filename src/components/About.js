import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { motion } from 'framer-motion';
import '../assets/styles/About.css'
import professionalPhoto from '../assets/image/My_New_Photo.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section section-alt">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
        >
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2 variants={itemVariants} className="section-title">
                About <span className="text-gradient">Me</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="section-subtitle text-muted">
                Passionate developer crafting digital experiences
              </motion.p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div variants={itemVariants} className="about-content">
                <h3 className="mb-4">Hello! I'm a Frontend Developer</h3>
                <p className="mb-4">
                  A creative Frontend & Web Developer from Chennai, passionate about 
                  building interactive, user-friendly websites and applications. With a degree in 
                  Information Technology and expertise in HTML, CSS, JavaScript, Python, SQL, and React, 
                  I love turning ideas into functional and visually appealing digital experiences.
                </p>
                <p className="mb-4">
                  As a fresher, I bring fresh perspectives, a problem-solving mindset, and a hunger to 
                  learn and grow in the ever-evolving world of web development. Whether it's debugging 
                  code, optimizing performance, or crafting responsive designs, I thrive on challenges 
                  that push me to innovate.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <strong>🎯 Focus:</strong> Focusing on user-friendly web development.
                  </div>
                  <div className="highlight-item">
                    <strong>💡 Philosophy:</strong> Clean code, beautiful design.
                  </div>
                  <div className="highlight-item">
                    <strong>🚀 Goal:</strong> Continuous learning and growth in Tech.
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div variants={itemVariants} className="about-image-container">
                <div className="about-image-wrapper">
                  <div className="about-image-placeholder">
                    <img 
                      src={professionalPhoto} 
                      alt="Professional Photo" 
                      className="professional-photo"
                    />
                  </div>
                  <div className="image-decoration decoration-1"></div>
                  <div className="image-decoration decoration-2"></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      
    </section>
  );
};

export default About; 
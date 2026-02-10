import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { motion } from 'framer-motion';
import '../assets/styles/About.css'
// import professionalPhoto from '../assets/image/My_New_Photo.png';
import professionalPhoto2 from '../assets/image/About_page.png';

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
                <h3 className="mb-4">Hello! I'm a Software Engineer (Full Stack – Java & Angular)</h3>
                <p className="mb-4">
                  I’m a passionate developer from Chennai, currently working at Inspirisys Solutions, where I build and enhance enterprise applications using Java Spring Boot and Angular. With a strong foundation in Frontend Development (HTML, CSS, JavaScript, React) and growing expertise in backend systems, I enjoy creating clean, efficient, and scalable solutions.
                </p>
                <p className="mb-4">
                  I started my career as a fresher with a deep interest in building user-friendly, responsive interfaces — and now, as a full-time Software Engineer, I’m expanding that skill into full-stack development, backend architecture, and real-world software engineering practices.
                </p>
                <p className="mb-4">
                  Every day, I work on improving application performance, fixing bugs, integrating APIs, and contributing to production-ready features under real project workflows.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <strong>🎯 Focus:</strong> Full Stack Development (Java Spring Boot + Angular)
                  </div>
                  <div className="highlight-item">
                    <strong>💡 Philosophy:</strong> Clean code, scalable systems.
                  </div>
                  <div className="highlight-item">
                    <strong>🚀 Goal:</strong> To grow into a well-rounded full-stack engineer and build impactful products
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div variants={itemVariants} className="about-image-container">
                <div className="about-image-wrapper">
                  <div className="about-image-placeholder">
                    <img
                      src={professionalPhoto2}
                      alt="Shree Kumar"
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
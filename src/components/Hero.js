import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsDownload, BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import '../assets/styles/Hero.css';
import CV from '../data/SHREE KUMAR MB.pdf';


const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Frontend Developer',
    'Software Engineer',
    'Web Developer'
  ];

  useEffect(() => {
    let timeout;
    const typeText = () => {
      const currentRoleText = roles[currentRole];
      let i = 0;

      const typeChar = () => {
        if (i < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, i + 1));
          i++;
          timeout = setTimeout(typeChar, 100);
        } else {
          // Wait 2 seconds, then clear and move to next role
          timeout = setTimeout(() => {
            let j = currentRoleText.length;
            const deleteChar = () => {
              if (j > 0) {
                setDisplayText(currentRoleText.slice(0, j - 1));
                j--;
                timeout = setTimeout(deleteChar, 50);
              } else {
                setCurrentRole((prev) => (prev + 1) % roles.length);
              }
            };
            deleteChar();
          }, 2000);
        }
      };

      typeChar();
    };

    typeText();

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRole]);

  const handleScrollToProjects = () => {
    const aboutSection = document.getElementById('projects');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // In a real portfolio, this would download the actual CV
    const link = document.createElement('a');
    link.href = CV; // You would add your actual resume file to the public folder
    link.download = 'SHREE KUMAR MB.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-content"
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm <span className="text-gradient">SHREE KUMAR</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-subtitle"
              >
                I'm a <span className="text-gradient">{displayText}</span>
                <span className="typing-cursor">|</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hero-description"
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '3rem',
                  maxWidth: '600px',
                  margin: '0 auto 3rem auto',
                  lineHeight: '1.6'
                }}
              >
                Passionate about creating beautiful, functional, and user-friendly web applications
                with modern technologies and best practices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="hero-cta d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center"
              >
                <button
                  className="btn-primary-custom d-flex align-items-center gap-2"
                  onClick={handleScrollToProjects}
                >
                  View My Work
                  <BsArrowDown />
                </button>

                <button
                  className="btn-outline-custom d-flex align-items-center gap-2"
                  onClick={handleDownloadCV}
                >
                  <BsDownload />
                  Download CV
                </button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Floating animation elements */}
      <div className="hero-decorations">
        <motion.div
          className="decoration hero-decoration-0"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="decoration hero-decoration-1"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="decoration hero-decoration-2"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="decoration hero-decoration-3"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>


    </section>
  );
};

export default Hero; 
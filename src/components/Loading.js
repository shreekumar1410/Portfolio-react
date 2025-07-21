import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Loading.css';

const Loading = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }
    }
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dotsVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="loading-container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loading-content">
        {/* Animated Logo/Icon */}
        <motion.div 
          className="loading-logo"
          variants={logoVariants}
        >
          <div className="logo-circle">
            <span className="logo-text">SK</span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div 
          className="loading-text"
          variants={textVariants}
        >
          <h2>SHREE KUMAR</h2>
          <p>Loading amazing content...</p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div 
          className="loading-dots"
          variants={dotsVariants}
        >
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </motion.div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="loading-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading; 
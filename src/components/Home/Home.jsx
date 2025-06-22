import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  containerVariants,
  slideInFromLeft,
  slideInFromRight,
  fadeInWithSlideUp,
  scaleUpWithFade
} from '../../utils/animations';
import profileImage from '../../assets/images/My_New_Photo.png';
import cvFile from '../../assets/files/Shree_Kumar_CV.pdf';
import './Home.css';

// Unified animation configuration
const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-30px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Web', 'Frontend', 'Full Stack'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current] + ' Developer';

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <motion.section
      id="home"
      className="home-section"
      {...animationConfig}
      variants={containerVariants}
    >
      <motion.div 
        className="home-container"
        {...animationConfig}
        variants={slideInFromLeft}
      >
        <motion.div 
          className="home-content"
          {...animationConfig}
          transition={{ ...animationConfig.transition, staggerChildren: 0.1 }}
        >
          <motion.h2 
            className="home-greeting"
            {...animationConfig}
            variants={slideInFromLeft}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="home-title"
            {...animationConfig}
            variants={slideInFromLeft}
            transition={{ ...animationConfig.transition, delay: 0.1 }}
          >
            SHREE KUMAR
          </motion.h1>
          
          <motion.h2 
            className="home-subtitle"
            {...animationConfig}
            variants={slideInFromLeft}
            transition={{ ...animationConfig.transition, delay: 0.2 }}
          >
            <span className="typed-text">{text}</span>
            <span className="cursor">&nbsp;</span>
          </motion.h2>
          
          <motion.p 
            className="home-description"
            {...animationConfig}
            variants={slideInFromLeft}
            transition={{ ...animationConfig.transition, delay: 0.3 }}
          >
            I'm a passionate developer based in Chennai, and I'm very dedicated
            to creating efficient, user-friendly web applications.
          </motion.p>
          
          <motion.a 
            href={cvFile} 
            download="Shree_Kumar_CV.pdf"
            className="home-button"
            {...animationConfig}
            variants={scaleUpWithFade}
            transition={{ ...animationConfig.transition, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div 
          className="home-image"
          {...animationConfig}
          variants={slideInFromRight}
          transition={{ ...animationConfig.transition, delay: 0.5 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
        >
          <img 
            src={profileImage} 
            alt="Shree Kumar MB" 
            className="profile-photo"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
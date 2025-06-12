import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  containerVariants, 
  itemVariants, 
  slideInFromLeft, 
  slideInFromRight,
  scaleUp,
  fadeIn
} from '../../utils/animations';
import profileImage from '../../assets/images/My_New_Photo.png';
import cvFile from '../../assets/files/Shree_Kumar_CV.pdf';
import './Home.css';

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
      initial="hidden"
      // animate="visible"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div 
        className="home-container"
        variants={containerVariants}
      >
        <motion.div 
          className="home-content"
          variants={itemVariants}
        >
          <motion.h2 
            className="home-greeting"
            variants={slideInFromLeft}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            className="home-title"
            variants={slideInFromRight}
          >
            Shree Kumar
          </motion.h1>
          <motion.h2 
            className="home-subtitle"
            variants={fadeIn}
          >
            <span className="typed-text">{text}</span>
            <span className="cursor">&nbsp;</span>
          </motion.h2>
          <motion.p 
            className="home-description"
            variants={fadeIn}
          >
            I'm a passionate developer based in Chennai, and I'm very dedicated
            to creating efficient, user-friendly web applications.
          </motion.p>
          <motion.a 
            href={cvFile} 
            download="Shree_Kumar_CV.pdf"
            className="home-button"
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div 
          className="home-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <img 
            src={profileImage} 
            alt="Shree Kumar" 
            className="profile-photo"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImage from '../../assets/images/My_New_Photo.png';

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
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h2 className="home-greeting">Hello, I'm</h2>
          <h1 className="home-title">Shree Kumar</h1>
          <h2 className="home-subtitle">
            <span className="typed-text">{text}</span>
            <span className="cursor">&nbsp;</span>
          </h2>
          <p className="home-description">
            I'm a passionate developer based in Chennai, and I'm very dedicated
            to creating efficient, user-friendly web applications.
          </p>
          <a href="#contact" className="home-button">
            Say Hello
          </a>
        </div>
        <div className="home-image">
          <img 
            src={profileImage} 
            alt="Shree Kumar" 
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
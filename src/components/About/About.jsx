import React from 'react';
import './About.css';
import logo from '../../assets/images/Shree Kumar Photo.png'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm Shree Kumar, a passionate Full Stack Developer with expertise in building
              web applications using modern technologies. I love solving complex problems and
              creating efficient, scalable, and user-friendly solutions.
            </p>
            <p>
              With a strong foundation in computer science and hands-on experience in various
              programming languages and frameworks, I strive to build applications that make
              a difference.
            </p>
            <div className="about-info"> 
              <div className="info-item">
                <span>Name:</span>
                <p>Shree Kumar MB</p>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <p>shreekumarmb@gmail.com</p>
              </div>
              <div className="info-item">
                <span>Experience:</span>
                <p>Fresher</p>
              </div>
              <div className="info-item">
                <span>From:</span>
                <p>Chennai, India</p>
              </div>
            </div>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src={logo} alt="Shree Kumar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
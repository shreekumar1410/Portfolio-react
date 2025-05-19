import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import MyPhoto from '../../assets/images/My_New_Photo.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Hi, I'm Shree Kumar!</strong><br />
              A creative Frontend & Web Developer from Chennai, passionate about 
              building interactive, user-friendly websites and applications. With a degree in 
              Information Technology and expertise in HTML, CSS, JavaScript, Python, SQL, and React, 
              I love turning ideas into functional and visually appealing digital experiences.
            </p>
            <p>
              As a fresher, I bring fresh perspectives, a problem-solving mindset, and a hunger to 
              learn and grow in the ever-evolving world of web development. Whether it's debugging 
              code, optimizing performance, or crafting responsive designs, I thrive on challenges 
              that push me to innovate.
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
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <LazyLoadImage
                src={MyPhoto}
                alt="Shree Kumar"
                effect="blur"
                width="100%"
                height="auto"
                className="profile-photo"
              />
            </div>
            <div className="social_links">
              <a 
                href="https://www.linkedin.com/in/shree-kumar-mb/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/shreekumar1410" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://x.com/ShreeKumar91905" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.youtube.com/@shreekumarmb9924" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                data-tooltip="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
              <LazyLoadImage
                src={MyPhoto}
                alt="Shree Kumar"
                effect="blur"
                width="100%"
                height="auto"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
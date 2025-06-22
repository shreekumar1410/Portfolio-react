import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  contactSlideIn,
  contactContainer,
  contactFormInput,
  contactInfoItem
} from '../../utils/animations';
import './Contact.css';

// Professional contact animation configuration
const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-40px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setIsSubmitted(true);
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      {...animationConfig}
      variants={contactContainer}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          {...animationConfig}
          variants={contactSlideIn}
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          className="contact-content"
          {...animationConfig}
          variants={contactContainer}
        >
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            {...animationConfig}
            variants={contactContainer}
          >
            <motion.h3 
              {...animationConfig}
              variants={contactSlideIn}
            >
              Contact Information
            </motion.h3>
            <motion.p 
              {...animationConfig}
              variants={contactSlideIn}
              transition={{ ...animationConfig.transition, delay: 0.1 }}
            >
              Feel free to reach out to me for any questions or opportunities!
            </motion.p>

            <motion.ul 
              className="info-list"
              {...animationConfig}
              variants={contactContainer}
            >
              {[
                { icon: <FaMapMarkerAlt />, text: "Old Washermenpet, Chennai, India" },
                { icon: <FaPhone />, text: "+91 7358314846" },
                { icon: <FaEnvelope />, text: "shreekumarmb@gmail.com" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  {...animationConfig}
                  variants={contactInfoItem}
                  transition={{ 
                    ...animationConfig.transition, 
                    delay: index * 0.1 
                  }}
                  whileHover={{
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="info-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              className="social-links"
              {...animationConfig}
              variants={contactSlideIn}
              transition={{ ...animationConfig.transition, delay: 0.4 }}
            >
              {/* Add your social media links here */}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            {...animationConfig}
            variants={contactContainer}
          >
            <motion.div 
              className="form-group"
              {...animationConfig}
              variants={contactFormInput}
              transition={{ ...animationConfig.transition, delay: 0.1 }}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(0,123,255,0.2)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
            <motion.div 
              className="form-group"
              {...animationConfig}
              variants={contactFormInput}
              transition={{ ...animationConfig.transition, delay: 0.2 }}
            >
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(0,123,255,0.2)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
            <motion.div 
              className="form-group"
              {...animationConfig}
              variants={contactFormInput}
              transition={{ ...animationConfig.transition, delay: 0.3 }}
            >
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 2px rgba(0,123,255,0.2)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  key="success"
                  {...animationConfig}
                  variants={contactSlideIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  Message sent successfully!
                </motion.div>
              ) : (
                <motion.button
                  key="submit"
                  type="submit"
                  className="submit-btn"
                  {...animationConfig}
                  variants={contactSlideIn}
                  transition={{ ...animationConfig.transition, delay: 0.4 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="send-icon" />
                  Send Message
                </motion.button>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
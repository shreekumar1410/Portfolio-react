import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  containerVariants, 
  itemVariants, 
  fadeIn,
  slideInFromLeft,
  slideInFromRight
} from '../../utils/animations';
import './Contact.css';

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            variants={slideInFromLeft}
          >
            <motion.h3 variants={fadeIn}>Contact Information</motion.h3>
            <motion.p variants={fadeIn}>
              Feel free to reach out to me for any questions or opportunities!
            </motion.p>

            <motion.ul className="info-list">
              <motion.li variants={itemVariants}>
                <FaMapMarkerAlt className="info-icon" />
                <span>Old Washermenpet, Chennai, India</span>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FaPhone className="info-icon" />
                <span>+91 7358314846</span>
              </motion.li>
              <motion.li variants={itemVariants}>
                <FaEnvelope className="info-icon" />
                <span>shreekumarmb@gmail.com</span>
              </motion.li>
            </motion.ul>

            <motion.div className="social-links">
              {/* Add your social media links here */}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            variants={slideInFromRight}
          >
            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  Message sent successfully!
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  className="submit-btn"
                  variants={fadeIn}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="send-icon" />
                  Send Message
                </motion.button>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
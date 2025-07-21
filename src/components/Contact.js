import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { 
  BsEnvelope, BsPhone, BsGeoAlt, BsLinkedin, 
  BsGithub, BsTwitter, BsSend 
} from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../assets/styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <BsEnvelope size={24} />,
      title: 'Email',
      value: 'shreekumar1410',
      link: 'mailto:shreekumar1410@gmail.com'
    },
    {
      icon: <BsPhone size={24} />,
      title: 'Phone',
      value: '+91 7358314846',
      link: 'tel:+917358314846'
    },
    {
      icon: <BsGeoAlt size={24} />,
      title: 'Location',
      value: 'Chennai, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <BsLinkedin size={24} />,
      url: 'https://linkedin.com/in/shree-kumar-mb',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: <BsGithub size={24} />,
      url: 'https://github.com/shreekumar1410',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: <BsTwitter size={24} />,
      url: 'https://x.com/ShreeKumar91905',
      color: '#1DA1F2'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube size={24} />,
      url: 'https://www.youtube.com/@shreekumarmb9924',
      color: '#FF0000'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
        >
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2 variants={itemVariants} className="section-title">
                Get In <span className="text-gradient">Touch</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="section-subtitle text-muted">
                Let's discuss your project and bring your ideas to life
              </motion.p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                {/* Contact Info */}
                <Col lg={4} className="mb-4 mb-lg-0">
                  <motion.div variants={itemVariants} className="contact-info">
                    <h3 className="contact-info-title mb-4">Contact Information</h3>
                    
                    <div className="contact-items">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="contact-item">
                          <div className="contact-icon">
                            {item.icon}
                          </div>
                          <div className="contact-details">
                            <h4>{item.title}</h4>
                            {item.link ? (
                              <a href={item.link} className="contact-value">
                                {item.value}
                              </a>
                            ) : (
                              <span className="contact-value">{item.value}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="social-section">
                      <h4 className="social-title">Follow Me</h4>
                      <div className="social-links">
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ '--social-color': social.color }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Col>

                {/* Contact Form */}
                <Col lg={8}>
                  <motion.div variants={itemVariants} className="contact-form">
                    <h3 className="contact-form-title mb-4">Send Me a Message</h3>
                    
                    {submitStatus === 'success' && (
                      <Alert variant="success" className="mb-4">
                        <strong>Success!</strong> Your message has been sent successfully. 
                        I'll get back to you soon!
                      </Alert>
                    )}
                    
                    {submitStatus === 'error' && (
                      <Alert variant="danger" className="mb-4">
                        <strong>Error!</strong> Something went wrong. Please try again later.
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label">Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={`form-control-custom ${formErrors.name ? 'is-invalid' : ''}`}
                              placeholder="Your Full Name"
                            />
                            {formErrors.name && (
                              <div className="form-error">{formErrors.name}</div>
                            )}
                          </Form.Group>
                        </Col>
                        
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label">Email *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`form-control-custom ${formErrors.email ? 'is-invalid' : ''}`}
                              placeholder="your.email@example.com"
                            />
                            {formErrors.email && (
                              <div className="form-error">{formErrors.email}</div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>

                      <div className="mb-3">
                        <Form.Group>
                          <Form.Label className="form-label">Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`form-control-custom ${formErrors.subject ? 'is-invalid' : ''}`}
                            placeholder="What's this about?"
                          />
                          {formErrors.subject && (
                            <div className="form-error">{formErrors.subject}</div>
                          )}
                        </Form.Group>
                      </div>

                      <div className="mb-4">
                        <Form.Group>
                          <Form.Label className="form-label">Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`form-control-custom ${formErrors.message ? 'is-invalid' : ''}`}
                            placeholder="Tell me about your project..."
                          />
                          {formErrors.message && (
                            <div className="form-error">{formErrors.message}</div>
                          )}
                        </Form.Group>
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary-custom d-inline-flex align-items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="spinner"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <BsSend />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </Form>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>

      
    </section>
  );
};

export default Contact; 
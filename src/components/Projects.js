import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { BsGithub, BsEyeFill, BsArrowRight, BsX } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/styles/Projects.css'
import projectsData from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = projectsData;

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'IoT', label: 'IoT' },
    { key: 'AI/ML', label: 'AI/ML' },
    { key: 'web-development', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="section section-alt">
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
                My <span className="text-gradient">Projects</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="section-subtitle text-muted">
                A showcase of my recent work and side projects
              </motion.p>
            </Col>
          </Row>

          {/* Filter Buttons */}
          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <motion.div variants={itemVariants} className="filter-container">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                    onClick={() => setFilter(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </motion.div>
            </Col>
          </Row>

          {/* Projects Grid */}
          <Row>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <Col md={6} lg={4} key={project.id} className="mb-4">
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="project-card"
                    onClick={() => handleProjectClick(project)}
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="project-image-container">
                      <div className="project-image-placeholder">
                        <img 
                          src={project.img} 
                          alt={project.title}
                          className="project-image"
                        />
                      </div>
                      <div className="project-overlay">
                        <div className="project-links">
                          <button 
                            className="project-link-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <BsGithub size={20} />
                          </button>
                          <button 
                            className="project-link-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.link, '_blank');
                            }}
                          >
                            <BsEyeFill size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-technologies">
                        {project.tags.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="tech-tag more">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="project-footer">
                        <span className="view-details">
                          View Details <BsArrowRight />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </Container>

      {/* Project Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header className="project-modal-header">
              <Modal.Title className="project-modal-title">
                {selectedProject.title}
              </Modal.Title>
              <button 
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
              >
                <BsX size={24} />
              </button>
            </Modal.Header>
            
            <Modal.Body className="project-modal-body">
              <div className="modal-project-image">
                <div className="project-image-placeholder large">
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title}
                    className="project-image large"
                  />
                </div>
              </div>

              <div className="modal-project-content">
                <p className="modal-project-description">
                  {selectedProject.description}
                </p>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="modal-technologies">
                    {selectedProject.tags.map((tech, index) => (
                      <span key={index} className="tech-tag large">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-custom me-3"
                  >
                    <BsGithub className="me-2" />
                    View Code
                  </a>
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-custom"
                  >
                    <BsEyeFill className="me-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      
    </section>
  );
};

export default Projects; 
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  SiC, SiFlask, SiMysql
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/styles/Skills.css'

const Skills = () => {
  const [techFilter, setTechFilter] = useState('all');

  const technicalSkills = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Python', color: '#3776AB' },
    { name: 'C', color: '#A8B9CC' },
    { name: 'Flask', color: '#000000' },
    { name: 'SQL', color: '#4479A1' }
  ];

  const technologies = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 size={60} />, color: '#E34F26', category: 'frontend' },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt size={60} />, color: '#1572B6', category: 'frontend' },
    { id: 3, name: 'JavaScript', icon: <FaJs size={60} />, color: '#F7DF1E', category: 'frontend' },
    { id: 4, name: 'React', icon: <FaReact size={60} />, color: '#61DAFB', category: 'frontend' },
    { id: 5, name: 'Python', icon: <FaPython size={60} />, color: '#3776AB', category: 'backend' },
    { id: 6, name: 'C', icon: <SiC size={60} />, color: '#A8B9CC', category: 'backend' },
    { id: 7, name: 'Flask', icon: <SiFlask size={60} />, color: '#000000', category: 'backend' },
    { id: 8, name: 'SQL', icon: <SiMysql size={60} />, color: '#4479A1', category: 'database' }
  ];

  const techCategories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' }
  ];

  const filteredTechnologies = techFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === techFilter);

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Critical Thinking',
    'Continuous Learning'
  ];



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
    <section id="skills" className="section">
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
                My <span className="text-gradient">Skills</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="section-subtitle text-muted">
                Technologies and tools I work with
              </motion.p>
            </Col>
          </Row>

          {/* Technical Skills */}
          <Row className="mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div variants={itemVariants} className="skills-card">
                <h3 className="skills-card-title mb-4">
                  <span className="icon-wrapper me-3">⚡</span>
                  Technical Skills
                </h3>
                <div className="technical-skills-grid">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="technical-skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ '--skill-color': skill.color }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div variants={itemVariants} className="skills-card">
                <h3 className="skills-card-title mb-4">
                  <span className="icon-wrapper me-3">🎯</span>
                  Soft Skills
                </h3>
                <div className="soft-skills-grid">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="soft-skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Technologies */}
          <Row className="justify-content-center">
            <Col lg={12}>
              <motion.div variants={itemVariants} className="technologies-section">
                <h3 className="technologies-title text-center mb-4">
                  <span className="icon-wrapper me-3">🛠️</span>
                  Technologies & Tools
                </h3>
                
                {/* Technology Filter Buttons */}
                <div className="tech-filter-container mb-5">
                  {techCategories.map((category) => (
                    <button
                      key={category.key}
                      className={`tech-filter-btn ${techFilter === category.key ? 'active' : ''}`}
                      onClick={() => setTechFilter(category.key)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Technologies Grid with Animation */}
                <div className="technologies-grid">
                  <AnimatePresence>
                    {filteredTechnologies.map((tech, index) => (
                      <motion.div
                        key={`${tech.name}-${techFilter}`}
                        className="tech-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        layout
                      >
                        <div 
                          className="tech-icon"
                          style={{ color: tech.color }}
                        >
                          {tech.icon}
                        </div>
                        <span className="tech-name">{tech.name}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      
    </section>
  );
};

export default Skills; 
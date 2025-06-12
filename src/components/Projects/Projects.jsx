import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { 
  containerVariants, 
  itemVariants, 
  fadeIn,
  scaleUp
} from '../../utils/animations';
import projectsData from './projectsData.js';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get all unique categories
  const categories = ['all', ...new Set(
    projectsData.flatMap(project => 
      project.category.split(',').map(cat => cat.trim())
    )
  )];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const projectCategories = project.category.split(',').map(cat => cat.trim());
    const matchesFilter = filter === 'all' || projectCategories.includes(filter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.section
      id="projects"
      className="projects-section"
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
          My Projects
        </motion.h2>
        
        <motion.div 
          className="projects-filter"
          variants={containerVariants}
        >
          <motion.div 
            className="search-box"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
          
          <motion.div 
            className="dropdown-filter"
            variants={itemVariants}
          >
            <motion.button 
              className="dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter /> {filter === 'all' ? 'All Categories' : filter}
            </motion.button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      className={`dropdown-item ${filter === category ? 'active' : ''}`}
                      onClick={() => {
                        setFilter(category);
                        setIsDropdownOpen(false);
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          layout
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                  }}
                  layout
                >
                  <motion.div 
                    className="project-image"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={project.img} alt={project.title} />
                    <motion.div 
                      className="project-links"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <motion.div className="project-tags">
                      {project.tags.map((tag) => (
                        <motion.span 
                          key={tag} 
                          className="tag"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>No projects found matching your criteria</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { 
  projectSlideIn,
  projectContainer,
  projectFadeUp
} from '../../utils/animations';
import projectsData from './projectsData.js';
import './Projects.css';

// Professional animation configuration
const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-40px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

// Professional dropdown animations
const dropdownMenuVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      when: "beforeChildren"
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const dropdownItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  closed: {
    y: -15,
    opacity: 0,
    scale: 0.95,
    transition: { 
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

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
      {...animationConfig}
      variants={projectContainer}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          {...animationConfig}
          variants={projectSlideIn}
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          className="projects-filter"
          {...animationConfig}
          variants={projectContainer}
        >
          <motion.div 
            className="search-box"
            {...animationConfig}
            variants={projectFadeUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 }
            }}
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
            {...animationConfig}
            variants={projectFadeUp}
            transition={{ ...animationConfig.transition, delay: 0.1 }}
          >
            <motion.button 
              className="dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter /> {filter === 'all' ? 'All Categories' : filter}
            </motion.button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  className="dropdown-menu"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownMenuVariants}
                >
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      className={`dropdown-item ${filter === category ? 'active' : ''}`}
                      onClick={() => {
                        setFilter(category);
                        setIsDropdownOpen(false);
                      }}
                      variants={dropdownItemVariants}
                      whileHover={{ 
                        x: 8,
                        backgroundColor: 'var(--primary-light)',
                        transition: { duration: 0.2 }
                      }}
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

        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid"
            {...animationConfig}
            variants={projectContainer}
            key={filter} // Re-trigger animation on filter change
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="project-card"
                  {...animationConfig}
                  variants={projectSlideIn}
                  transition={{ 
                    ...animationConfig.transition, 
                    delay: index * 0.08 
                  }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 }
                  }}
                  layout
                >
                  <motion.div 
                    className="project-image"
                    {...animationConfig}
                    variants={projectFadeUp}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <img src={project.img} alt={project.title} />
                    <motion.div 
                      className="project-links"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.2,
                          y: -2,
                          color: 'var(--primary-color)',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.2,
                          y: -2,
                          color: '#333',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="project-content"
                    {...animationConfig}
                    variants={projectFadeUp}
                    transition={{ 
                      ...animationConfig.transition, 
                      delay: index * 0.08 + 0.1 
                    }}
                  >
                    <motion.h3
                      {...animationConfig}
                      variants={projectFadeUp}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      {...animationConfig}
                      variants={projectFadeUp}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="project-tags"
                      {...animationConfig}
                      variants={projectContainer}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tag} 
                          className="tag"
                          {...animationConfig}
                          variants={projectFadeUp}
                          transition={{ 
                            ...animationConfig.transition, 
                            delay: index * 0.08 + 0.2 + tagIndex * 0.05 
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            backgroundColor: 'var(--primary-light)',
                            transition: { duration: 0.2 }
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="no-projects"
                {...animationConfig}
                variants={projectSlideIn}
              >
                <p>No projects found matching your criteria</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;
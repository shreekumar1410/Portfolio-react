import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiFlask, SiC, SiMysql } from 'react-icons/si';
import { 
  professionalSlideIn,
  techPopIn,
  techContainer,
  techButtonSlide
} from '../../utils/animations';
import './Technologies.css';

// Tech-focused animation configuration
const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-30px" },
  transition: { duration: 0.8 }
};

const Technologies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 />, category: 'frontend' },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend' },
    { id: 3, name: 'JavaScript', icon: <FaJs />, category: 'frontend' },
    { id: 4, name: 'React', icon: <FaReact />, category: 'frontend' },
    { id: 5, name: 'Python', icon: <FaPython />, category: 'backend' },
    { id: 6, name: 'C', icon: <SiC />, category: 'backend' },
    { id: 7, name: 'Flask', icon: <SiFlask />, category: 'backend' },
    { id: 8, name: 'SQL', icon: <SiMysql />, category: 'database' }
  ];

  const filteredTechs = activeFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <motion.section
      id="technologies"
      className="section"
      {...animationConfig}
      variants={techContainer}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          {...animationConfig}
          variants={professionalSlideIn}
        >
          Technologies I Know
        </motion.h2>
        
        {/* Filter Buttons */}
        <motion.div 
          className="tech-filters"
          {...animationConfig}
          variants={techContainer}
        >
          {['all', 'frontend', 'backend', 'database'].map((filter, index) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              {...animationConfig}
              variants={techButtonSlide}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 150,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                rotate: 2,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: -2,
                transition: { duration: 0.1 }
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          className="tech-grid"
          key={activeFilter} // Re-trigger animation on filter change
          {...animationConfig}
          variants={techContainer}
        >
          {filteredTechs.map((tech, index) => (
            <motion.div 
              key={tech.id}
              className={`tech-card ${hoveredTech === tech.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              {...animationConfig}
              variants={techPopIn}
              transition={{ 
                delay: index * 0.08,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.15,
                rotate: 10,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: -5,
                transition: { duration: 0.1 }
              }}
            >
              <motion.div 
                className="tech-icon"
                variants={techPopIn}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
              >
                {React.cloneElement(tech.icon, { 
                  className: `tech-svg ${tech.category}` 
                })}
              </motion.div>
              {hoveredTech === tech.id && (
                <motion.div 
                  className="tech-name"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    y: 20,
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech.name}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Technologies;
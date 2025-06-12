import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiFlask, SiC, SiMysql } from 'react-icons/si';
import { 
  containerVariants, 
  itemVariants, 
  fadeIn,
  scaleUp
} from '../../utils/animations';
import './Technologies.css';

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
          Technologies I Know
        </motion.h2>
        
        {/* Filter Buttons */}
        <motion.div 
          className="tech-filters"
          variants={containerVariants}
        >
          {['all', 'frontend', 'backend', 'database'].map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div 
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredTechs.map((tech) => (
            <motion.div 
              key={tech.id}
              className={`tech-card ${hoveredTech === tech.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="tech-icon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {React.cloneElement(tech.icon, { 
                  className: `tech-svg ${tech.category}` 
                })}
              </motion.div>
              {hoveredTech === tech.id && (
                <motion.div 
                  className="tech-name"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
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
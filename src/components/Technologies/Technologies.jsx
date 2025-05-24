import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiFlask, SiC, SiMysql } from 'react-icons/si';
import './Technologies.css';

const Technologies = () => {
    const [activeTab, setActiveTab] = useState('education');
  

  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 />, category: 'frontend' },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend' },
    { id: 3, name: 'JavaScript', icon: <FaJs />, category: 'frontend' },
    { id: 4, name: 'React', icon: <FaReact />, category: 'frontend' },
    { id: 5, name: 'Python', icon: <FaPython />, category: 'backend' },
    { id: 6, name: 'C', icon: <SiC />, category: 'backend' },
    { id: 7, name: 'SQL', icon: <SiMysql />, category: 'database' },
    { id: 8, name: 'Flask', icon: <SiFlask />, category: 'backend' }
  ];

  const filteredTechs = activeFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section id="technologies" className="section">
      <div className="container">
        <h2 className="section-title">Technologies I Know</h2>
        
        {/* Filter Buttons */}
        <div className="tech-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'database' ? 'active' : ''}`}
            onClick={() => setActiveFilter('database')}
          >
            Database
          </button>
        </div>

        {/* Technology Grid */}
        <div className="tech-grid">
          {filteredTechs.map((tech) => (
            <div 
              key={tech.id}
              className={`tech-card ${hoveredTech === tech.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="tech-icon">
                {React.cloneElement(tech.icon, { 
                  className: `tech-svg ${tech.category}` 
                })}
              </div>
              {hoveredTech === tech.id && (
                <div className="tech-name">{tech.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
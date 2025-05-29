import React, { useState } from 'react';
import { FaSearch, FaFilter, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectsData from './projectsData.js';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get all unique categories from projects
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-filter">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="dropdown-filter">
            <button 
              className="dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaFilter /> {filter === 'all' ? 'All Categories' : filter}
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`dropdown-item ${filter === category ? 'active' : ''}`}
                    onClick={() => {
                      setFilter(category);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import './EducationExperience.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');

  // Sample data - replace with your actual details
  const educationData = [
    {
      id: 1,
      year: "2019 - 2023",
      degree: "Bachelor of Technology in IT",
      institution: "Your University",
      description: "Specialized in Web Development and Data Structures."
    },
    {
      id: 2,
      year: "2017 - 2019",
      degree: "Higher Secondary",
      institution: "Your College",
      description: "Computer Science Stream."
    }
  ];

  const experienceData = [
    {
      id: 1,
      year: "2022 - Present",
      role: "Frontend Developer",
      company: "XYZ Tech",
      description: "Building responsive UIs with React.js."
    },
    {
      id: 2,
      year: "2021 - 2022",
      role: "Web Developer Intern",
      company: "ABC Solutions",
      description: "Developed and maintained company websites."
    }
  ];

  return (
    <section id="education-experience" className="section">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap /> Education
          </button>
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase /> Experience
          </button>
        </div>

        <div className="timeline-container">
          {activeTab === 'education' ? (
            <div className="timeline education-timeline">
              {educationData.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.degree}</h3>
                    <h4 className="timeline-subtitle">{item.institution}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="timeline experience-timeline">
              {experienceData.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.role}</h3>
                    <h4 className="timeline-subtitle">{item.company}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
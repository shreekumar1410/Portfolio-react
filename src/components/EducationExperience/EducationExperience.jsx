import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaChevronRight } from 'react-icons/fa';
import './EducationExperience.css';

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      icon: <FaGraduationCap className="edu-icon" />,
      degree: "Bachelor of Technology in Information Technology",
      institution: "Jaya Engineering College",
      period: "2020 – 2024",
      details: [
        "CGPA: 7.9/10",
        "Relevant coursework: Web Development, Front-End Frameworks",
      ]
    },
    {
      id: 2,
      icon: <FaGraduationCap className="edu-icon" />,
      degree: "Diploma in Mechanical Engineering",
      institution: "Jaya Polytechnic College",
      period: "2018 – 2021",
      details: [
        "Percentage: 85%",
        "Participated in various technical workshops and seminars"
      ]
    },
    {
      id: 3,
      icon: <FaGraduationCap className="edu-icon" />,
      degree: "Bhaktavatsalam Vidhyashram (10th Grade)",
      institution: "CBSE",
      period: "2018",
      details: [
        "Scored 55% in final board exams"
      ]
    }
  ];

  const experienceData = [
    {
      id: 1,
      icon: <FaBriefcase className="exp-icon" />,
      role: "Web Designer Intern",
      company: "Anur Cloud Technologies",
      period: "Jun 2023 – Jul 2023",
      details: [
        "Collaborated with designers and Designed user-friendly interfaces",
        "Worked with Photoshop to create and edit images for web use",
      ]
    }
  ];

  return (
    <section id="education-experience" className="section">
      <div className="container">
        <h2 className="section-title">
          My Journey
        </h2>

        <div className="tab-switcher">
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

        <div className="timeline">
          {(activeTab === 'education' ? educationData : experienceData).map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${activeTab}`}
              style={{ '--delay': index * 0.1 + 's' }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{activeTab === 'education' ? item.degree : item.role}</h3>
                  <span className="period">{item.period}</span>
                </div>
                <h4>{activeTab === 'education' ? item.institution : item.company}</h4>
                <ul className="details-list">
                  {item.details.map((detail, i) => (
                    <li key={i}>
                      {/* <FaChevronRight className="bullet-icon" /> */}
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
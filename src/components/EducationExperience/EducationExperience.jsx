import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaChevronRight } from 'react-icons/fa';
import { 
  professionalSlideIn,
  professionalContainer
} from '../../utils/animations';
import './EducationExperience.css';

// Unified animation configuration
const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

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
    <motion.section
      id="education"
      className="section"
      {...animationConfig}
      variants={professionalContainer}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          {...animationConfig}
          variants={professionalSlideIn}
        >
          My Journey
        </motion.h2>

        <motion.div 
          className="tab-switcher"
          {...animationConfig}
          variants={professionalContainer}
        >
          <motion.button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
            {...animationConfig}
            variants={professionalSlideIn}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap /> Education
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
            {...animationConfig}
            variants={professionalSlideIn}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase /> Experience
          </motion.button>
        </motion.div>

        <motion.div 
          className="timeline"
          {...animationConfig}
          variants={professionalContainer}
        >
          <AnimatePresence mode="wait">
            {(activeTab === 'education' ? educationData : experienceData).map((item, index) => (
              <motion.div 
                key={item.id} 
                className={`timeline-item ${activeTab}`}
                {...animationConfig}
                variants={professionalSlideIn}
                transition={{ 
                  ...animationConfig.transition, 
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="timeline-icon"
                  {...animationConfig}
                  variants={professionalSlideIn}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.div 
                  className="timeline-content"
                  {...animationConfig}
                  variants={professionalSlideIn}
                  transition={{ 
                    ...animationConfig.transition, 
                    delay: index * 0.1 + 0.1 
                  }}
                >
                  <motion.div 
                    className="timeline-header"
                    {...animationConfig}
                    variants={professionalSlideIn}
                  >
                    <h3>{activeTab === 'education' ? item.degree : item.role}</h3>
                    <span className="period">{item.period}</span>
                  </motion.div>
                  <motion.h4
                    {...animationConfig}
                    variants={professionalSlideIn}
                  >
                    {activeTab === 'education' ? item.institution : item.company}
                  </motion.h4>
                  <motion.ul 
                    className="details-list"
                    {...animationConfig}
                    variants={professionalContainer}
                  >
                    {item.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        {...animationConfig}
                        variants={professionalSlideIn}
                        transition={{ 
                          ...animationConfig.transition, 
                          delay: index * 0.1 + 0.2 + i * 0.05 
                        }}
                        whileHover={{
                          x: 5,
                          color: "#007bff",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationExperience;
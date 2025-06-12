import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaChevronRight } from 'react-icons/fa';
import { 
  containerVariants, 
  itemVariants, 
  fadeIn,
  slideInFromLeft,
  slideInFromRight
} from '../../utils/animations';
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
    <motion.section
      id="education"
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
          My Journey
        </motion.h2>

        <motion.div 
          className="tab-switcher"
          variants={containerVariants}
        >
          <motion.button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap /> Education
          </motion.button>
          <motion.button
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase /> Experience
          </motion.button>
        </motion.div>

        <motion.div 
          className="timeline"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {(activeTab === 'education' ? educationData : experienceData).map((item, index) => (
              <motion.div 
                key={item.id} 
                className={`timeline-item ${activeTab}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="timeline-icon"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <motion.div 
                  className="timeline-content"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className="timeline-header">
                    <h3>{activeTab === 'education' ? item.degree : item.role}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <h4>{activeTab === 'education' ? item.institution : item.company}</h4>
                  <ul className="details-list">
                    {item.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                      >
                        {detail}
                        {/* <FaChevronRight className="bullet-icon" /> */}
                        
                      </motion.li>
                    ))}
                  </ul>
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
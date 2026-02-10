import React, { useState } from 'react';
import { Container, Row, Col /* Tab, Tabs */ } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  // BsMortarboard,
  // BsBriefcase,
  BsCalendar3,
  BsGeoAlt,
  BsAward,
  BsCode,
  BsLightbulb,
  BsStarFill,
  // BsTrophyFill,
  BsRocketTakeoffFill
} from 'react-icons/bs';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import '../assets/styles/Journey.css';
import { technologies } from '../data/skillsData';

const Journey = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Jaya Engineering College",
      location: "Chennai, Tamil Nadu", // Add your college location later
      duration: "2020 – 2024",
      grade: "CGPA: 7.9/10",
      status: "Completed",
      highlights: [
        "Relevant coursework: Web Development, Front-End Frameworks",
        "Specialized in modern web technologies and frameworks",
        "Completed major projects in IoT, AI/ML, and Web Development",
        // Add more highlights about your college achievements later
      ],
      color: "#4F46E5"
    },
    {
      id: 2,
      degree: "Diploma in Mechanical Engineering",
      field: "Mechanical Engineering",
      institution: "Jaya Polytechnic College",
      location: "Chennai, Tamil Nadu", // Add your polytechnic location later
      duration: "2018 – 2021",
      grade: "Percentage: 85%",
      status: "Completed",
      highlights: [
        "Participated in various technical workshops and seminars",
        "Strong foundation in engineering principles",
        "Developed problem-solving and analytical skills",
        // Add more specific achievements from polytechnic later
      ],
      color: "#059669"
    },
    {
      id: 3,
      degree: "Secondary School Certificate (10th Grade)",
      field: "CBSE Board",
      institution: "Bhaktavatsalam Vidhyashram",
      location: "Chennai, Tamil Nadu", // Add your school location later
      duration: "2018",
      grade: "Percentage: 55%",
      status: "Completed",
      highlights: [
        "Completed CBSE board examinations",
        "Foundation in Mathematics and Science",
        // Add more details about school achievements later
      ],
      color: "#7C3AED"
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Web Designer Intern",
      role: "Web Design & UI/UX",
      company: "Anur Cloud Technologies",
      location: "Chennai, Tamil Nadu", // Add specific location later if needed
      duration: "Jun 2023 – Jul 2023",
      type: "Completed",
      description: "Gained hands-on experience in web design and user interface development during summer internship.",
      achievements: [
        "Collaborated with designers and designed user-friendly interfaces",
        "Worked with Photoshop to create and edit images for web use",
        "Learned industry best practices for web design",
        "Developed skills in responsive design principles",
        // Add more specific achievements from internship later
      ],
      color: "#DC2626"
    },
    {
      id: 2,
      title: "Software Engineer",
      role: "Java Full Stack Developer",
      company: "Inspirisys Solutions",
      location: "Chennai, Tamil Nadu",
      duration: "Jan 2026 – Present",
      type: "Current",
      description: "Currently working as a Software Engineer, focusing on backend development with Spring Boot and frontend development using Angular while contributing to real project modules and enhancements.",
      achievements: [
        "Understanding project architecture and working on assigned modules under mentor guidance",
        "Developing REST APIs using Java Spring Boot and integrating them with Angular frontend",
        "Fixing bugs, handling UI improvements, and completing daily assigned trainee tasks",
        "Writing clean, modular code and following company coding standards",
        "Working with team leads to understand requirements and convert them into functional features",
        "Learning and implementing best practices such as exception handling, logging, and request validation"
      ],
      color: "#2563EB"
    }

    // Add more work experiences here later as your career progresses
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="journey" className="section section-alt">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
        >
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2 variants={cardVariants} className="section-title">
                My <span className="text-gradient">Journey</span>
              </motion.h2>
              <motion.p variants={cardVariants} className="section-subtitle text-muted">
                From student to developer - my path in tech
              </motion.p>
            </Col>
          </Row>

          {/* Interactive Tabs */}
          <Row className="justify-content-center mb-4">
            <Col lg={8}>
              <motion.div variants={cardVariants} className="journey-tabs">
                <button
                  className={`journey-tab ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  <FaGraduationCap className="me-2" />
                  Education
                </button>
                <button
                  className={`journey-tab ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  <FaBriefcase className="me-2" />
                  Experience
                </button>
              </motion.div>
            </Col>
          </Row>

          {/* Education Cards */}
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Row className="g-4">
                {education.map((item, index) => (
                  <Col lg={4} key={item.id}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="journey-card education-card"
                      style={{ '--card-color': item.color }}
                    >
                      <div className="card-header">
                        <div className="card-icon">
                          <FaGraduationCap />
                        </div>
                        <div className="card-status">{item.status}</div>
                      </div>

                      <div className="card-content">
                        <h3 className="card-title">{item.degree}</h3>
                        <h4 className="card-subtitle">{item.field}</h4>

                        <div className="card-meta">
                          <div className="meta-item">
                            <FaGraduationCap className="meta-icon" />
                            <span>{item.institution}</span>
                          </div>
                          <div className="meta-item">
                            <BsGeoAlt className="meta-icon" />
                            <span>{item.location}</span>
                          </div>
                          <div className="meta-item">
                            <BsCalendar3 className="meta-icon" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="meta-item grade">
                            <BsAward className="meta-icon" />
                            <span>{item.grade}</span>
                          </div>
                        </div>

                        <div className="card-highlights">
                          <h5><BsStarFill className="me-2" />Key Highlights</h5>
                          <ul>
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          )}

          {/* Experience Cards */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Row className="g-4 justify-content-center">
                {experience.map((item, index) => (
                  <Col lg={6} md={8} sm={10} key={item.id}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="journey-card experience-card"
                      style={{ '--card-color': item.color }}
                    >
                      <div className="card-header">
                        <div className="card-icon">
                          {item.type === 'Current' && <BsRocketTakeoffFill />}
                          {item.type === 'Completed' && <FaBriefcase />}
                          {item.type === 'Ongoing' && <BsCode />}
                        </div>
                        <div className="card-status">{item.type}</div>
                      </div>

                      <div className="card-content">
                        <h3 className="card-title">{item.title}</h3>
                        <h4 className="card-subtitle">{item.role}</h4>

                        <div className="card-meta">
                          <div className="meta-item">
                            <FaBriefcase className="meta-icon" />
                            <span>{item.company}</span>
                          </div>
                          <div className="meta-item">
                            <BsGeoAlt className="meta-icon" />
                            <span>{item.location}</span>
                          </div>
                          <div className="meta-item">
                            <BsCalendar3 className="meta-icon" />
                            <span>{item.duration}</span>
                          </div>
                        </div>

                        <p className="card-description">{item.description}</p>

                        <div className="card-achievements">
                          <h5><BsLightbulb className="me-2" />Achievements</h5>
                          <ul>
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          )}

          {/* Journey Stats */}
          <Row className="justify-content-center mt-5">
            <Col lg={10}>
              <motion.div variants={cardVariants} className="journey-stats">
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Years Education</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{technologies.length}+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">&lt;1 year</div>
                  <div className="stat-label">Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Software <span className="stat-span">Engineer</span></div>
                  <div className="stat-label">Joined in 2025</div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Journey; 
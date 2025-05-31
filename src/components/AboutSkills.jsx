import React from 'react';
import { FaBullseye, FaJava, FaCode, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaCogs, FaFigma, FaPaintBrush } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostman, SiCanva, SiExpress } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';
import './AboutSkills.css';

const skills = [
  { icon: <FaJava />, label: 'Java' },
  { icon: <FaCode />, label: 'C' },
  { icon: <FaHtml5 />, label: 'HTML' },
  { icon: <FaCss3Alt />, label: 'CSS' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express.js' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <FaGithub />, label: 'Git/GitHub' },
  { icon: <SiPostman />, label: 'Postman' },
  { icon: <FaFigma />, label: 'Figma' },
  { icon: <SiCanva />, label: 'Canva' },
];

const interests = [
  { label: 'Web Development' },
  {  label: 'RESTful API Development' },
];

const AboutSkills = () => (
  <section id="about" className="about-skills">
    <div className="about-grid">
      <div className="career-objective card">
        <h3><FaBullseye style={{ marginRight: 8, color: '#338891' }} />Career Objective</h3>
        <p>Passionate computer science student with a strong foundation in programming and problem-solving. Eager to apply my skills in building efficient and scalable applications while learning and growing in a collaborative environment.</p>
      </div>
      <div className="interests-grid card">
        <h3><FaStar style={{ marginRight: 8, color: '#338891' }} />Area of Interest</h3>
        <div className="skills-list">
          {interests.map((interest, idx) => (
            <div key={idx} className="skill-item" style={{ color: '#ffffff' }}>{interest.icon} {interest.label}</div>
          ))}
        </div>
      </div>
      <div className="skills-grid card">
        <h3><FaCogs style={{ marginRight: 8, color: '#338891' }} />Skills</h3>
        <div className="skills-list">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-item" style={{ color: '#ffffff' }}>{skill.icon} {skill.label}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSkills; 
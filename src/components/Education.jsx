import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const educationData = [
  {
    school: 'Bannari Amman Institute of Technology',
    degree: 'B.Tech in Computer Science and Business Systems (2022–2026)',
    details: 'CGPA: 7.39 (Up to 5th Semester)',
  },
  {
    school: 'Kurinji Education Institution, Namakkal',
    degree: 'HSC (2021–2022)',
    details: 'Percentage: 70.8%',
  },
  {
    school: 'The Spectrum Academy Matriculation School, Namakkal',
    degree: 'SSLC (2019–2020)',
    details: 'Percentage: 74.6%',
  },
];

const Education = () => (
  <section id="education" className="education-section">
    <h2>Education</h2>
    <div className="timeline">
      {educationData.map((edu, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-icon"><FaGraduationCap /></div>
          <div className="timeline-content">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <span>{edu.details}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education; 
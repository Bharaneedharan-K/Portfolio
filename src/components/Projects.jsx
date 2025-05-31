import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'BINFN – Code Snippet Sharing Website',
    role: 'Backend Developer',
    teamSize: 3,
    duration: '3 months',
    techStack: ['Express.js', 'Node.js', 'MongoDB', 'React'],
    liveLink: 'https://binfn.vercel.app',
    description: 'A code snippet platform with syntax highlighting and real-time updates. Implemented secure JWT-based user authentication and deployed using Vercel (frontend) and Render (backend).',
  },
  {
    title: 'Tic-Tac-Toe Multiplayer (WebSocket)',
    role: 'Full Stack Developer',
    teamSize: 1,
    duration: '1 month',
    techStack: ['React', 'Express.js', 'WebSocket', 'Node.js'],
    liveLink: 'https://tic-tac-toe-multiplayers.vercel.app',
    description: 'Developed a real-time multiplayer game using WebSockets, allowing users to create/join rooms and play interactively with real-time game state synchronization.',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
      <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3>{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-meta">
            <span><b>Role:</b> {project.role}</span>
            <span><b>Team Size:</b> {project.teamSize}</span>
            <span><b>Duration:</b> {project.duration}</span>
          </div>
          <div className="project-tech">
            {project.techStack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn">View Live</a>
        </div>
      ))}
      </div>
  </section>
);

export default Projects; 
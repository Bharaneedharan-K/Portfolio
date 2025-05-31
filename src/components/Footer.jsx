import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© 2024 Bharaneedharan K</span>
      <div className="footer-social">
        <a href="https://linkedin.com/in/Bharaneedharan-K" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/Bharaneedharan-K" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 
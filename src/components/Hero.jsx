import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <h1>BHARANEEDHARAN K</h1>
    <h2>B.Tech Computer Science and Business Systems</h2>
    <p className="location">Namakkal, Tamil Nadu, India</p>
    <div className="social-row">
      <a href="https://linkedin.com/in/Bharaneedharan-K" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/Bharaneedharan-K" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="mailto:bharaneedharan2004@gmail.com" aria-label="Email"><FaEnvelope /></a>
    </div>
    <div className="hero-actions">
      <a href="#projects" className="hero-btn">View Projects</a>
      <a href="#contact" className="hero-btn secondary">Contact Me</a>
    </div>
  </section>
);

export default Hero; 
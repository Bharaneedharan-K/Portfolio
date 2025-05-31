import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact</h2>
    <div className="contact-container">
      <div className="contact-box">
        <h3><FaPhoneAlt /> Phone</h3>
        <p>9080274778</p>

        <h3><FaEnvelope /> Email</h3>
        <p>bharaneedharan2004@gmail.com</p>
        <p>bharaneedharan.cb22@bitsathy.ac.in</p>

        <h3><FaMapMarkerAlt /> Location</h3>
        <p>Namakkal, Tamil Nadu, India</p>
      </div>

      <div className="contact-social">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:bharaneedharan2004@gmail.com"><FaEnvelope /></a>
      </div>
    </div>
  </section>
);

export default Contact;

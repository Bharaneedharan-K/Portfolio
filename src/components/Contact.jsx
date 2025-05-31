import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact</h2>
    <div className="contact-info">
      <div>
        <h3><FaPhoneAlt /> Phone</h3>
        <p>9080274778</p>
      </div>
      <div>
        <h3><FaEnvelope /> Email</h3>
        <p>bharaneedharan2004@gmail.com</p>
        <p>bharaneedharan.cb22@bitsathy.ac.in</p>
      </div>
      <div>
        <h3><FaMapMarkerAlt /> Location</h3>
        <p>Namakkal, Tamil Nadu, India</p>
      </div>
    </div>
    
  </section>
);

export default Contact; 
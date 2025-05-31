import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSkills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
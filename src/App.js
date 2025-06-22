import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skill from './components/skill';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className=' '>
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

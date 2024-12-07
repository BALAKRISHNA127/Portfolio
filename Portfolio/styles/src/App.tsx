import React from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Update title
    document.title = "Rishabh Lawaniya | Software Engineer & UX Enthusiast";
    
    // Update favicon dynamically if needed
    // const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    // if (link) {
    //   link.href = "/path-to-custom-favicon.ico";
    // }
    
    // Add custom cursor if needed
    // const cursor = document.createElement('div');
    // cursor.classList.add('custom-cursor');
    // document.body.appendChild(cursor);
    
    // const onMouseMove = (e: MouseEvent) => {
    //   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    // };
    
    // document.addEventListener('mousemove', onMouseMove);
    
    // return () => {
    //   document.removeEventListener('mousemove', onMouseMove);
    //   document.body.removeChild(cursor);
    // };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
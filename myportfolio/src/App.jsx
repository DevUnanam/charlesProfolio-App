// import './App.css'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Project from './Components/Project/Project'
import Skills from './Components/Skills/Skills'
// import Footer from './Components/Footer/Footer'

// function App() {
//   return (
//     <>
//       <Hero/>
//       <Project/>
//       <Skills/>
//       <Contacts/>
//       <Footer/>
//     </>
//   )
// }

// export default App

import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.01 } // Trigger when 10% of the section is visible
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // return (observer.disconnect) => observer.disconnect(); // Cleanup    
    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <>
      <section ref={el => sectionsRef.current[0] = el} className="fade-in-section">
        <Hero />
      </section>
      <section ref={el => sectionsRef.current[1] = el} className="fade-in-section">
        <Project />
      </section>
      <section ref={el => sectionsRef.current[2] = el} className="fade-in-section">
        <Skills />
      </section>
      <section ref={el => sectionsRef.current[3] = el} className="fade-in-section">
        <Contacts />
      </section>
      <section ref={el => sectionsRef.current[4] = el} className="fade-in-section">
        <Footer />
      </section>
    </>
  );
}

export default App;


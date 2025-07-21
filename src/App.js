import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import './assets/styles/theme.css';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    // Simulate loading time and preload resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    // Clean up
    return () => {
      clearTimeout(timer);
      AOS.refresh();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <div key="main-content">
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Journey />
                <Projects />
                <Contact />
              </main>
              <footer className="footer">
                <div className="container text-center py-4">
                  <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                    © 2025 Shree Kumar. Built with React & Bootstrap. Made with ❤️
                  </p>
                </div>
              </footer>
              <ScrollToTop />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;

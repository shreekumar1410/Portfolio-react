import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SidebarNav from './components/SidebarNav/SidebarNav';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './assets/styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 
       localStorage.getItem('darkMode') !== 'false');
  });

  const location = useLocation();

  useEffect(() => {
    const applyDarkMode = () => {
      document.documentElement.style.transition = 'all 0.5s ease-in-out';
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      setTimeout(() => {
        document.documentElement.style.transition = '';
      }, 500);
    };

    applyDarkMode();
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`App ${darkMode ? 'dark' : ''}`}
      >
        <SidebarNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop darkMode={darkMode} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
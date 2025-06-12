import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SidebarNav from './components/SidebarNav/SidebarNav';
import './assets/styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's preference or use system preference
    return localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 
       localStorage.getItem('darkMode') !== 'false');
  });

  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'var(--background)';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'var(--background)';
    }
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
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import SidebarNav from './components/SidebarNav/SidebarNav';
import './assets/styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's preference or use system preference
    return localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 
       localStorage.getItem('darkMode') !== 'false');
  });

  // useEffect(() => {
  //   // Apply dark mode class to document
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('darkMode', 'true');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('darkMode', 'false');
  //   }
  // }, [darkMode]);

  // Add this useEffect to your App component
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
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <SidebarNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
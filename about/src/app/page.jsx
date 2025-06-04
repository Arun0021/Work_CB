'use client'; // This directive is crucial for client-side functionality like useState and useEffect

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Navbar from '../comp/Navbar';
import Main1 from '../comp/Main1';
import Main2 from '../comp/Main2/Main2';
import Main3 from '../comp/Main3';
import Main4 from '../comp/Main4';
import Main5 from '../comp/Main5';
import Main6 from '../comp/Main6/Main6';
import Main7 from '../comp/Main7';
import Footer from '../comp/Footer';

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    if (typeof window !== 'undefined') { // Ensure window is defined for client-side operations
      const savedMode = localStorage.getItem('theme');
      if (savedMode) {
        setIsDarkMode(savedMode === 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
      }
    }
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Apply dark/light class to document.documentElement (html tag) for global styling
    if (typeof document !== 'undefined') { // Ensure document is defined for client-side operations
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDarkMode]); // Re-run when isDarkMode changes

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      {/* Navbar is typically placed at the top of the layout */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Render your main sections, passing isDarkMode as a prop */}
      <Main1 isDarkMode={isDarkMode} />
      <Main2 isDarkMode={isDarkMode} />
      <Main3 isDarkMode={isDarkMode} />
      <Main4 isDarkMode={isDarkMode} />
      <Main5 isDarkMode={isDarkMode} />
      <Main6 isDarkMode={isDarkMode} />
      <Main7 isDarkMode={isDarkMode} />
      {/* Footer is placed at the bottom, passing isDarkMode as a prop */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

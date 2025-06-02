import React, { useState, useEffect } from 'react';
import Navbar from './comp/Navbar';
import Main1 from './comp/Main1';
import Main2 from './comp/Main2/Main2';
import Main3 from './comp/Main3';
import Main4 from './comp/Main4';
import Main5 from './comp/Main5';
import Main6 from './comp/Main6/Main6';
import Main7 from './comp/Main7';
import Footer from './comp/Footer';

function App() {
  // State for dark mode, now managed at the App level
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('theme') === 'dark') {
        return true;
      }
      if (localStorage.getItem('theme') === 'light') {
        return false;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default for SSR
  });

  // Effect to apply/remove 'dark' class on <html> tag and save preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    // The outermost div also needs to respond to dark mode for global background
    <div className={`App min-h-screen bg-white dark:bg-gray-900`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main1 isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      {/* Other components or content */}
      <Main2 isDarkMode={isDarkMode} />
      <Main3 isDarkMode={isDarkMode}/>
      <Main4 isDarkMode={isDarkMode}/>
      <Main5 isDarkMode={isDarkMode}/>
      <Main6 isDarkMode={isDarkMode}/>
      <Main7 isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import Part1 from './Part1'; // Assuming Part1.jsx exists in the same directory
import Part2 from './Part2'; // Assuming Part2.jsx exists in the same directory

// Main6 now receives isDarkMode as a prop
const Main6 = ({ isDarkMode }) => {
  return (
    <>
      {/* Pass isDarkMode to children components */}
      <Part1 isDarkMode={isDarkMode} />
      <Part2 isDarkMode={isDarkMode} />
    </>
  );
};

export default Main6;

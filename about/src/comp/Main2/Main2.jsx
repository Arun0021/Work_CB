'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import Part1 from './Part1'; // Assuming Part1.jsx exists in the same components directory
import Part2 from './Part2'; // Assuming Part2.jsx exists in the same components directory

// Main2 now receives isDarkMode as a prop
const Main2 = ({ isDarkMode }) => {
  return (
    <>
      {/* Pass isDarkMode to children components */}
      <Part1 isDarkMode={isDarkMode} />
      <Part2 isDarkMode={isDarkMode} />
    </>
  );
};

export default Main2;

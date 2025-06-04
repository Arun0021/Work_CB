'use client'; // This directive is crucial for client-side components

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import image1 from '../assets/image1.webp';

// Main1 now receives isDarkMode as a prop
const Main1 = ({ isDarkMode }) => { // Removed toggleDarkMode from props
  // Common classes for Main1 sections
  const commonContainerClasses = "flex flex-col md:flex-row items-center justify-center p-8 min-h-screen";
  const commonTextDivClasses = "flex flex-col items-start justify-center p-8 md:w-1/2 text-center md:text-left";
  const commonAboutUsClasses = "text-sm font-semibold uppercase mb-4";
  const commonHeadingClasses = "text-4xl md:text-5xl font-bold leading-tight mb-6"; // Adjusted text size for better responsiveness
  const commonParagraphClasses = "text-base md:text-lg mb-8 max-w-lg"; // Adjusted text size for better responsiveness
  const commonButtonClasses = "flex items-center px-6 py-3 md:px-8 md:py-4 font-medium rounded-lg shadow-lg transition-all duration-300 text-sm md:text-base"; // Adjusted button size for responsiveness
  const commonImageDivClasses = "flex justify-center items-center p-4 md:w-1/2";
  const commonImageClasses = "max-w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500";


  // Dynamic classes based on theme
  const mainBgClass = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const aboutUsColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const headingColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const purpleSpanColorClass = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  const paragraphColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const buttonBgClass = isDarkMode ? 'bg-gray-700' : 'bg-black';
  const buttonTextColor = 'text-white'; // Text color is always white for these buttons
  const buttonHoverBgClass = isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-800';
  const buttonSvgColorClass = 'text-white'; // SVG color is always white for these buttons


  return (
    <div className={`${commonContainerClasses} ${mainBgClass}`}>
      {/* Left Div: Text Content and Button */}
      <div className={commonTextDivClasses}>
        <p className={`${commonAboutUsClasses} ${aboutUsColorClass}`}>
          ABOUT US
        </p>
        <h1 className={`${commonHeadingClasses} ${headingColorClass}`}>
          Shaping the Next Generation of HR Tech <span className={purpleSpanColorClass}>Recruitment.</span>
        </h1>
        <p className={`${commonParagraphClasses} ${paragraphColorClass}`}>
          At Everything Talent, we help you launch your recruitment into a new dimension.
        </p>
        <button className={`${commonButtonClasses} ${buttonBgClass} ${buttonTextColor} ${buttonHoverBgClass}`}>
          Start for Free Today
          <svg className={`ml-3 w-5 h-5 ${buttonSvgColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>

      {/* Right Div: Image */}
      <div className={commonImageDivClasses}>
        {/* Using Next.js Image component */}
        <Image
          src={image1}
          alt="Microsoft Teams Conference Room"
          className={commonImageClasses}
          width={600} // Provide a default width
          height={400} // Provide a default height
          priority // Prioritize loading for above-the-fold content
        />
      </div>
    </div>
  );
};

export default Main1;

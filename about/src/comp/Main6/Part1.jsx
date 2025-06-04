'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import logo from "../../assets/logo1.webp"; // Assuming this is the small icon in the center

const Part1 = ({ isDarkMode }) => {
  // Common classes for various elements
  const commonContainerClasses = "relative flex flex-col items-center justify-center py-16 px-4 md:px-8 text-center overflow-hidden";
  const commonTopIconContainerClasses = "relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6";
  const commonSmallHeadingClasses = "text-sm font-semibold uppercase mb-2";
  const commonMainHeadingClasses = "text-4xl md:text-5xl font-extrabold leading-tight mb-4";
  const commonParagraphClasses = "text-lg max-w-2xl mx-auto mb-8";
  const commonButtonClasses = "flex items-center px-8 py-4 font-medium rounded-lg shadow-lg transition-all duration-300";

  // Dynamic classes based on theme
  const containerBgClass = isDarkMode ? 'bg-gray-950' : 'bg-white';
  const containerTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  const svgStrokeColor = isDarkMode ? '#6B7280' : '#9CA3AF'; // Darker gray for dark mode, light gray for light mode

  const topIconBgBorderShadowClass = isDarkMode ? 'bg-gray-800 border-[2px] border-gray-700 shadow-lg' : 'bg-white border-[2px] border-gray-300 shadow-lg';
  const smallHeadingColorClass = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  const mainHeadingColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const gradientTextFrom = isDarkMode ? 'from-purple-400' : 'from-purple-600';
  const gradientTextVia = isDarkMode ? 'via-blue-400' : 'via-blue-500';
  const gradientTextTo = isDarkMode ? 'to-yellow-400' : 'to-yellow-500';
  const paragraphColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-700';

  const buttonBgClass = isDarkMode ? 'bg-gray-800' : 'bg-black';
  const buttonTextColor = isDarkMode ? 'text-gray-200' : 'text-white';
  const buttonHoverBgClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-800';
  const buttonBorderClass = isDarkMode ? 'border border-gray-600' : ''; // Only border in dark mode
  const buttonSvgColorClass = isDarkMode ? 'text-gray-300' : 'text-white';


  return (
    <div className={`${commonContainerClasses} ${containerBgClass} ${containerTextColor}`}>
      {/* Curved Line SVG - positioned absolutely */}
      <svg
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0 C 80 20 80 80 50 100" // Simple S-curve
          stroke={svgStrokeColor} // Dynamic stroke color
          strokeWidth="2"
          strokeDasharray="4 4" // Dashed line
        />
      </svg>

      {/* Top Icon */}
      <div className={`${commonTopIconContainerClasses} ${topIconBgBorderShadowClass}`}>
        {/* Using Next.js Image component */}
        <Image src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" width={40} height={40} />
      </div>

      {/* Content */}
      <p className={`${commonSmallHeadingClasses} ${smallHeadingColorClass}`}>
        Our Values & Milestones
      </p>
      <h2 className={`${commonMainHeadingClasses} ${mainHeadingColorClass}`}>
        Our <span className={`bg-gradient-to-r ${gradientTextFrom} ${gradientTextVia} ${gradientTextTo} text-transparent bg-clip-text`}>Journey</span>
      </h2>
      <p className={`${commonParagraphClasses} ${paragraphColorClass}`}>
        Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
      </p>

      {/* Button */}
      <button className={`${commonButtonClasses} ${buttonBgClass} ${buttonTextColor} ${buttonHoverBgClass} ${buttonBorderClass}`}>
        Subscribe to Updates
        <svg className={`ml-2 w-5 h-5 ${buttonSvgColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>
  );
};

export default Part1;

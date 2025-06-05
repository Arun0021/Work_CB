'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import logo from "../../assets/logo1.webp"; // Assuming this is the correct path for your logo icon

// Part1 now receives isDarkMode as a prop
const Part1 = ({ isDarkMode }) => {
  // Common classes for the container
  const commonContainerClasses = "relative flex flex-col items-center justify-center  px-4 md:px-8 text-center overflow-hidden w-[1800px] m-auto";
  // The via-color for the gradient line will be dynamic based on isDarkMode
  const commonLineClasses = "absolute top-0 w-px h-[100px] bg-gradient-to-b from-transparent to-transparent";
  const commonIconContainerClasses = "relative z-10 w-16 h-16 rounded-full flex items-center justify-center";
  const commonSmallHeadingClasses = "text-sm font-semibold bg-gray-100 px-2 rounded mt-8 mb-2";
  const commonMainHeadingClasses = "text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-4";
  const commonParagraphClasses = "text-lg max-w-2xl mx-auto";

  // Dynamic classes based on theme
  // Removed containerBgClass from here, as the inner background div handles the base color
  const containerTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  // Dynamic colors for the new background grid pattern and circle
  const newBgGridLineColor = isDarkMode ? '#4f4f4f2e' : '#8080800a'; // Darker lines for dark mode, original for light mode
  const newBgCircleColor = isDarkMode ? 'bg-fuchsia-600' : 'bg-fuchsia-400'; // Darker fuchsia for dark mode
  const newBgOuterDivColor = isDarkMode ? 'bg-gray-950' : 'bg-white'; // Match container background for seamless transition

  const lineViaColor = isDarkMode ? 'via-purple-600' : 'via-purple-300'; // Dynamic via-color for the line SVG stroke

  const iconBgGradient = isDarkMode
    ? 'bg-gradient-to-br from-purple-300 to-pink-400'
    : 'bg-gradient-to-br from-purple-300 to-pink-400';
  const iconShadowClass = 'shadow-lg';

  const smallHeadingColor = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  const mainHeadingColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const mainHeadingGradientFrom = isDarkMode ? 'from-purple-400' : 'from-purple-600';
  const mainHeadingGradientVia = isDarkMode ? 'via-blue-400' : 'via-blue-500';
  const mainHeadingGradientTo = isDarkMode ? 'to-yellow-400' : 'to-yellow-500';
  const paragraphColor = isDarkMode ? 'text-gray-400' : 'text-gray-700';

  // Button specific dynamic classes
  const buttonBgClass = isDarkMode ? 'bg-gray-800' : 'bg-black';
  const buttonTextColor = isDarkMode ? 'text-gray-200' : 'text-white';
  const buttonHoverBgClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-800';
  const buttonBorderClass = isDarkMode ? 'border border-gray-600' : ''; // Only border in dark mode
  const buttonSvgColorClass = isDarkMode ? 'text-gray-300' : 'text-white';
  const commonButtonClasses = "flex items-center px-8 py-4 font-medium rounded-lg shadow-lg transition-all duration-300";

  return (
    // The main container of Part1.jsx
    <div className={`${commonContainerClasses} ${containerTextColor}`}>
      {/* Background Pattern and Pinkish Blur */}
      {/* **** KEY CHANGE HERE: Changed -z-10 to z-0 **** */}
      <div className={`absolute inset-0 z-0 h-full w-full ${newBgOuterDivColor}`}>
        {/* Grid lines */}
        <div
          className={`absolute bottom-0 left-0 right-0 top-0`}
          style={{
            backgroundImage: `linear-gradient(to right, ${newBgGridLineColor} 1px, transparent 1px), linear-gradient(to bottom, ${newBgGridLineColor} 1px, transparent 1px)`,
            backgroundSize: '14px 24px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)', // For Webkit browsers
          }}
        ></div>
        {/* Pinkish blur circle */}
        <div className={`absolute left-0 right-0 top-0 z-0 m-auto h-[310px] w-[310px] rounded-full ${newBgCircleColor} opacity-20 blur-[100px]`}></div>
      </div>

      {/* Curved Line SVG - positioned absolutely */}
      {/* Its z-index (z-10) is now higher than the background's z-0 */}
      <svg
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0 C 80 20 80 80 50 100" // Simple S-curve
          stroke={isDarkMode ? "#6B7280" : "#9CA3AF"} // Dynamic stroke color based on isDarkMode
          strokeWidth="2"
          strokeDasharray="4 4" // Dashed line
        />
      </svg>

      {/* Top Icon */}
      {/* Its z-index (z-20) is now higher than the background's z-0 */}
      <div className={`${commonIconContainerClasses} ${iconBgGradient} ${iconShadowClass} z-20`}>
        {/* Using Next.js Image component */}
        <Image src={logo} alt="Vision Icon" className="w-10 h-10 object-contain" width={40} height={40} />
      </div>

      {/* Content */}
      {/* These z-indices (z-20) are now higher than the background's z-0 */}
      <p className={`${commonSmallHeadingClasses} ${smallHeadingColor} z-20`}>
        Our Standards
      </p>
      <h2 className={`${commonMainHeadingClasses} ${mainHeadingColor} z-20`}>
        The Fuel for <span className={`bg-gradient-to-r ${mainHeadingGradientFrom} ${mainHeadingGradientVia} ${mainHeadingGradientTo} text-transparent bg-clip-text`}>Our Vision</span>
      </h2>
      <p className={`${commonParagraphClasses} ${paragraphColor} z-20`}>
        Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
      </p>

      {/* Button */}
      {/* Its z-index (z-20) is now higher than the background's z-0 */}
      {/* <button className={`${commonButtonClasses} ${buttonBgClass} ${buttonTextColor} ${buttonHoverBgClass} ${buttonBorderClass} z-20`}>
        Subscribe to Updates
        <svg className={`ml-2 w-5 h-5 ${buttonSvgColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button> */}
    </div>
  );
};

export default Part1;
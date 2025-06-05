// Main1.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import image1 from '../assets/image1.webp';

const Main1 = ({ isDarkMode }) => {
  const commonContainerClasses = "relative flex flex-col md:flex-row items-center justify-center w-[1800px] p-12 m-auto min-h-screen";
  const commonTextDivClasses = "flex flex-col items-start justify-around p-8 md:w-[600px] text-center md:text-left";
  const commonAboutUsClasses = "text-sm font-semibold uppercase mb-4";
  const commonHeadingClasses = "text-4xl md:text-5xl font-bold leading-tight mb-6";
  const commonParagraphClasses = "text-base md:text-lg mb-8 max-w-lg";
  // commonButtonClasses will be applied to the inner button
  const commonButtonClasses = "flex items-center px-6 py-3 md:px-6 md:py-5 font-bold rounded-lg transition-all duration-300 text-sm md:text-base"; // Removed shadow-lg from here, will be on the wrapper

  const commonImageDivClasses = "flex justify-center items-center p-4 md:w-1/2";
  const commonImageClasses = "max-w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500";

  // Dynamic classes based on theme
  const mainBgClass = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const aboutUsColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const headingColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const purpleSpanColorClass = "bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent";
  const paragraphColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const buttonBgClass = isDarkMode ? 'bg-gray-700' : 'bg-black'; // Button stays this color
  const buttonTextColor = 'text-white';
  // buttonHoverBgClass is not needed for the button itself with this method
  const buttonSvgColorClass = 'text-white';

  // Dynamic border color for the spinning circles
  const spinningCircleBorderColor = isDarkMode ? 'border-white/10' : 'border-black/20';

  // Gradient for the button outline on hover
  const buttonGradientOutline = 'bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400';

  return (
  
    <div className={`${commonContainerClasses} ${mainBgClass}`}>
      {/* Full set of Spinning Circles for the background */}
      <div className="absolute inset-0">
        {/* First Spinning Circle (top-3/4, left-5/14) */}
        <div
          className={`absolute top-3/4 left-5/14 w-64 h-64 border ${spinningCircleBorderColor} rounded-full animate-spin-20s`}
        ></div>

        {/* Third Spinning Circle (center, largest) */}
        <div
          className={`absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border ${spinningCircleBorderColor} rounded-full animate-spin-25s`}
        ></div>
      </div>

      {/* Left Div: Text Content and Button */}
      <div className={`${commonTextDivClasses} z-10`}>
        <p className={`${commonAboutUsClasses} ${aboutUsColorClass}`}>
          ABOUT US
        </p>
        <h1 className={`${commonHeadingClasses} ${headingColorClass} w-[650px]`}>
          Shaping the Next Generation of HR 
          <span className={purpleSpanColorClass}> Tech</span> <br />
          <span className={purpleSpanColorClass}> Recruitment.</span>
        </h1>
        <p className={`${commonParagraphClasses} ${paragraphColorClass}`}>
          At Everything Talent, we help you launch your recruitment into a new dimension.
        </p>

        {/* Button with Gradient Outline on Hover */}
        {/* Outer wrapper: provides relative context, rounded corners, shadow, and group hover state */}
        <div className={`relative rounded-lg shadow-lg overflow-hidden group`}>
          {/* This div provides the gradient background */}
          <div
            className={`absolute inset-0 rounded-lg ${buttonGradientOutline}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        `}>
          </div>

          {/* Actual button: always has its solid background color */}
          <button
            className={`${commonButtonClasses}
                       ${buttonBgClass} ${buttonTextColor} // Button's solid background and text color
                       relative z-10 // Ensures button is above the gradient div
                       group-hover:scale-x-[0.98] group-hover:scale-y-[0.95] // Scales down the button slightly on hover to reveal the gradient underneath as a border
                       transition-transform duration-300 // Smooth transition for the scale effect
                       `}
          >
            Start for Free Today
            <svg className={`ml-3 w-5 h-5 ${buttonSvgColorClass} transition-transform duration-300 group-hover:translate-x-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Right Div: Image */}
      <div className={`${commonImageDivClasses} rounded-xl z-10`}>
        <Image
          src={image1}
          alt="Microsoft Teams Conference Room"
          className={`${commonImageClasses} bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 p-[4px] `}
          width={600}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default Main1;
import React from 'react';
import logo from "../../assets/logo1.webp"; // Assuming this is the small icon in the center

const Part1 = ({ isDarkMode }) => {
  // Common classes for various elements
  const commonContainerClasses = "relative flex flex-col items-center justify-center py-16 px-4 md:px-8 text-center overflow-hidden";
  const commonTopIconContainerClasses = "relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6";
  const commonSmallHeadingClasses = "text-sm font-semibold uppercase mb-2";
  const commonMainHeadingClasses = "text-4xl md:text-5xl font-extrabold leading-tight mb-4";
  const commonParagraphClasses = "text-lg max-w-2xl mx-auto mb-8";
  const commonButtonClasses = "flex items-center px-8 py-4 font-medium rounded-lg shadow-lg transition-all duration-300";

  return (
    <>
      {isDarkMode ? (
        // --- DARK MODE Part1 ---
        <div className={`${commonContainerClasses} bg-gray-950 text-gray-200`}>
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
              stroke="#6B7280" // Darker gray for dark mode
              strokeWidth="2"
              strokeDasharray="4 4" // Dashed line
            />
          </svg>

          {/* Top Icon */}
          <div className={`${commonTopIconContainerClasses} bg-gray-800 border-[2px] border-gray-700 shadow-lg`}>
            <img src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" />
          </div>

          {/* Content */}
          <p className={`${commonSmallHeadingClasses} text-purple-400`}>
            Our Values & Milestones
          </p>
          <h2 className={`${commonMainHeadingClasses} text-white`}>
            Our <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 text-transparent bg-clip-text">Journey</span>
          </h2>
          <p className={`${commonParagraphClasses} text-gray-400`}>
            Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
          </p>

          {/* Button */}
          <button className={`${commonButtonClasses} bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-600`}>
            Subscribe to Updates
            <svg className="ml-2 w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      ) : (
        // --- LIGHT MODE Part1 ---
        <div className={`${commonContainerClasses} bg-white text-gray-800`}>
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
              stroke="#9CA3AF" // Light gray for light mode
              strokeWidth="2"
              strokeDasharray="4 4" // Dashed line
            />
          </svg>

          {/* Top Icon */}
          <div className={`${commonTopIconContainerClasses} bg-white border-[2px] border-gray-300 shadow-lg`}>
            <img src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" />
          </div>

          {/* Content */}
          <p className={`${commonSmallHeadingClasses} text-purple-600`}>
            Our Values & Milestones
          </p>
          <h2 className={`${commonMainHeadingClasses} text-gray-900`}>
            Our <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-500 text-transparent bg-clip-text">Journey</span>
          </h2>
          <p className={`${commonParagraphClasses} text-gray-700`}>
            Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
          </p>

          {/* Button */}
          <button className={`${commonButtonClasses} bg-black text-white hover:bg-gray-800`}>
            Subscribe to Updates
            <svg className="ml-2 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Part1;
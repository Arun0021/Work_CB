import React from 'react';
import image1 from '../assets/image1.webp';
import Navbar from './Navbar';

// Main1 now receives isDarkMode as a prop
const Main1 = ({ isDarkMode,toggleDarkMode }) => {
  // Common classes for Main1 sections
  const commonContainerClasses = "flex flex-col md:flex-row items-center justify-center p-8 min-h-screen";
  const commonTextDivClasses = "flex flex-col items-start justify-center p-8 md:w-1/2 text-center md:text-left";
  const commonAboutUsClasses = "text-sm font-semibold uppercase mb-4";
  const commonHeadingClasses = "text-5xl font-bold leading-tight mb-6";
  const commonParagraphClasses = "text-lg mb-8 max-w-lg";
  const commonButtonClasses = "flex items-center px-8 py-4 font-medium rounded-lg shadow-lg transition-all duration-300";
  const commonImageDivClasses = "flex justify-center items-center p-4 md:w-1/2";
  const commonImageClasses = "max-w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500";


  return (
    <>
    {/* <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
      {isDarkMode ? (
        // --- DARK MODE MAIN1 ---
        <div className={`${commonContainerClasses} bg-gray-900`}>
          {/* Left Div: Text Content and Button */}
          <div className={commonTextDivClasses}>
            <p className={`${commonAboutUsClasses} text-gray-400`}>
              ABOUT US
            </p>
            <h1 className={`${commonHeadingClasses} text-white`}>
              Shaping the Next Generation of HR Tech <span className="text-purple-400">Recruitment.</span>
            </h1>
            <p className={`${commonParagraphClasses} text-gray-300`}>
              At Everything Talent, we help you launch your recruitment into a new dimension.
            </p>
            <button className={`${commonButtonClasses} bg-gray-700 text-white hover:bg-gray-600`}>
              Start for Free Today
              <svg className="ml-3 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>

          {/* Right Div: Image */}
          <div className={commonImageDivClasses}>
            <img
              src={image1}
              alt="Microsoft Teams Conference Room"
              className={commonImageClasses}
            />
          </div>
        </div>
      ) : (
        // --- LIGHT MODE MAIN1 ---
        <div className={`${commonContainerClasses} bg-white`}>
          {/* Left Div: Text Content and Button */}
          <div className={commonTextDivClasses}>
            <p className={`${commonAboutUsClasses} text-gray-600`}>
              ABOUT US
            </p>
            <h1 className={`${commonHeadingClasses} text-gray-900`}>
              Shaping the Next Generation of HR Tech <span className="text-purple-600">Recruitment.</span>
            </h1>
            <p className={`${commonParagraphClasses} text-gray-700`}>
              At Everything Talent, we help you launch your recruitment into a new dimension.
            </p>
            <button className={`${commonButtonClasses} bg-black text-white hover:bg-gray-800`}>
              Start for Free Today
              <svg className="ml-3 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>

          {/* Right Div: Image */}
          <div className={commonImageDivClasses}>
            <img
              src={image1}
              alt="Microsoft Teams Conference Room"
              className={commonImageClasses}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Main1;
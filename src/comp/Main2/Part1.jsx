import React from 'react';
import logo from "../../assets/logo1.webp"; // Assuming this is the correct path for your logo icon

const Part1 = ({ isDarkMode }) => {
  // Common classes for the container
  const commonContainerClasses = "relative flex flex-col items-center justify-center py-16 px-4 md:px-8 text-center overflow-hidden";
  const commonLineClasses = "absolute top-0 w-px h-[100px] bg-gradient-to-b from-transparent via-purple-300 to-transparent";
  const commonIconContainerClasses = "relative z-10 w-16 h-16 rounded-full flex items-center justify-center";
  const commonSmallHeadingClasses = "text-sm font-semibold uppercase mt-8 mb-2";
  const commonMainHeadingClasses = "text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-4";
  const commonParagraphClasses = "text-lg max-w-2xl mx-auto";

  return (
    <>
      {isDarkMode ? (
        // --- DARK MODE Part1 ---
        <div className={`${commonContainerClasses} bg-gray-950 text-gray-200`}>
          {/* Background Grid/Gradient (simplified for Tailwind) */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-5"></div> {/* Subtle grid texture */}

          {/* Vertical Line */}
          <div className={`${commonLineClasses} via-purple-600`}></div>

          {/* Icon */}
          <div className={`${commonIconContainerClasses} bg-gradient-to-br from-purple-700 to-pink-700 shadow-lg`}>
            <img src={logo} alt="Vision Icon" className="w-10 h-10 object-contain" />
          </div>

          {/* Content */}
          <p className={`${commonSmallHeadingClasses} text-purple-400`}>
            Our Standards
          </p>
          <h2 className={`${commonMainHeadingClasses} text-white`}>
            The Fuel for <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 text-transparent bg-clip-text">Our Vision</span>
          </h2>
          <p className={`${commonParagraphClasses} text-gray-400`}>
            Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
          </p>
        </div>
      ) : (
        // --- LIGHT MODE Part1 ---
        <div className={`${commonContainerClasses} bg-white text-gray-800`}>
          {/* Background Grid/Gradient (simplified for Tailwind) */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div> {/* Subtle grid texture */}

          {/* Vertical Line */}
          <div className={`${commonLineClasses} via-purple-300`}></div>

          {/* Icon */}
          <div className={`${commonIconContainerClasses} bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg`}>
            <img src={logo} alt="Vision Icon" className="w-10 h-10 object-contain" />
          </div>

          {/* Content */}
          <p className={`${commonSmallHeadingClasses} text-purple-600`}>
            Our Standards
          </p>
          <h2 className={`${commonMainHeadingClasses} text-gray-900`}>
            The Fuel for <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-500 text-transparent bg-clip-text">Our Vision</span>
          </h2>
          <p className={`${commonParagraphClasses} text-gray-700`}>
            Driven by vision, we provide comprehensive solutions to meet all your hiring needs.
          </p>
        </div>
      )}
    </>
  );
};

export default Part1;
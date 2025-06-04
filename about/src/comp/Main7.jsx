'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
// No need to import Image from 'next/image' if bg is used directly in style.backgroundImage
// import Image from 'next/image';
import bg from "../assets/bg.svg"; // This is the SVG background you provided in the code snippet

const Main7 = ({ isDarkMode = false }) => { // isDarkMode is now explicitly a prop
  // Define dynamic styles/classes based on isDarkMode
  const containerBgColor = isDarkMode ? '#1a1a1a' : '#f0f4f8'; // Darker background for dark mode
  const svgStrokeColor = isDarkMode ? '#6b7280' : '#a78bfa'; // Lighter stroke for dark mode
  const svgTextColor = isDarkMode ? '#e5e7eb' : '#a78bfa'; // Lighter text for dark mode

  const cardBgGradient = isDarkMode
    ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80' // Darker gradient for card
    : 'bg-gradient-to-br from-purple-100/80 via-blue-100/80 to-indigo-100/80';

  const cardBorderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const descriptionColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const missionGradientFrom = isDarkMode ? 'from-purple-400' : 'from-purple-600';
  const missionGradientTo = isDarkMode ? 'to-pink-300' : 'to-pink-500';

  const buttonBgGradientFrom = isDarkMode ? 'from-indigo-600' : 'from-indigo-500';
  const buttonBgGradientTo = isDarkMode ? 'to-purple-600' : 'to-purple-500';
  const buttonHoverFrom = isDarkMode ? 'hover:from-indigo-700' : 'hover:from-indigo-600';
  const buttonHoverTo = isDarkMode ? 'hover:to-purple-700' : 'hover:to-purple-600';


  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden p-4 sm:p-8"
      style={{
        backgroundImage: `url(${bg.src})`, // Use .src for direct URL to SVG
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: containerBgColor, // Dynamic background color
      }}
    >
      {/* Optional: Overlay for subtle effects like darkening or adding a slight tint */}
      {/* For dark mode, you might want a very subtle overlay or none if bg.svg is already dark enough */}
      {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}

      {/* SVG Overlay for connecting lines and city names */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Connecting Lines (estimated paths) */}
        <path
          d="M100 150 Q200 50 300 150" // Alaska to Los Angeles
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M300 150 Q400 50 500 120" // Los Angeles towards Lisbon
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M500 120 Q600 50 700 150" // Lisbon towards Vladivostok/New Delhi
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M700 150 Q800 50 900 100" // Closer to Vladivostok
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M500 120 Q600 250 700 300" // Lisbon towards Brazil/Delhi (more southern arc)
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M400 350 Q500 450 600 350" // Brazil arc
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* City Names (estimated positions) */}
        <text x="100" y="140" fill={svgTextColor} fontSize="14" textAnchor="middle">Alaska</text>
        <text x="250" y="160" fill={svgTextColor} fontSize="14" textAnchor="middle">Los Angeles</text>
        <text x="500" y="110" fill={svgTextColor} fontSize="14" textAnchor="middle">Lisbon</text>
        <text x="850" y="110" fill={svgTextColor} fontSize="14" textAnchor="middle">Vladivostok</text>
        <text x="750" y="300" fill={svgTextColor} fontSize="14" textAnchor="middle">New Delhi</text>
        <text x="450" y="360" fill={svgTextColor} fontSize="14" textAnchor="middle">Brazil</text>
      </svg>

      {/* Main content card */}
      <div className={`relative z-10 ${cardBgGradient} backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 text-center max-w-xl mx-auto border ${cardBorderColor}`}>
        <h2 className={`text-3xl sm:text-4xl font-bold ${titleColor} mb-4 leading-tight`}>
          Join Our <span className={`bg-gradient-to-r ${missionGradientFrom} ${missionGradientTo} text-transparent bg-clip-text`}>Mission</span>
        </h2>
        <p className={`text-base sm:text-lg ${descriptionColor} mb-8`}>
          Help us reimagine the future of hiring in the tech industry.
        </p>
        <button className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r ${buttonBgGradientFrom} ${buttonBgGradientTo} ${buttonHoverFrom} ${buttonHoverTo} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-105`}>
          Start Here
          <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Main7;

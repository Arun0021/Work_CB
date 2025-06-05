'use client';

import React from 'react';
import bg from "../assets/bg.svg";

const Main7 = ({ isDarkMode = false }) => {
  const containerBgColor = isDarkMode ? '#1a1a1a' : '#f0f4f8';
  const svgStrokeColor = isDarkMode ? '#6b7280' : '#a78bfa';
  const svgTextColor = isDarkMode ? '#e5e7eb' : '#a78bfa';

  // --- REINTRODUCED: Original subtle card background for the inner part ---
  const cardBgGradient = isDarkMode
    ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80'
    : 'bg-gradient-to-br from-purple-100/80 via-blue-100/80 to-indigo-100/80';

  const cardBorderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200'; // This border will still be applied to the inner card
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const descriptionColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const missionGradientFrom = isDarkMode ? 'from-purple-400' : 'from-purple-600';
  const missionGradientTo = isDarkMode ? 'to-pink-300' : 'to-pink-500';

  // --- MODIFIED: Button background classes (solid, no internal gradient) ---
  const buttonBgClass = isDarkMode ? 'bg-gray-800' : 'bg-black';
  const buttonTextColor = isDarkMode ? 'text-gray-200' : 'text-white';

  // --- NEW: Permanent gradient for the card's outline ---
  const cardOutlineGradient = 'bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400';

  // --- RENAMED: Button gradient for the hover outline ---
  const buttonHoverGradientOutline = 'bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400';


  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden p-4 sm:p-8 w-[1800px] m-auto"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: containerBgColor,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* SVG paths and text for connecting lines and city names */}
        <path
          d="M100 150 Q200 50 300 150"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M300 150 Q400 50 500 120"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M500 120 Q600 50 700 150"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M700 150 Q800 50 900 100"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M500 120 Q600 250 700 300"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M400 350 Q500 450 600 350"
          fill="none"
          stroke={svgStrokeColor}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <text x="100" y="140" fill={svgTextColor} fontSize="14" textAnchor="middle">Alaska</text>
        <text x="250" y="160" fill={svgTextColor} fontSize="14" textAnchor="middle">Los Angeles</text>
        <text x="500" y="110" fill={svgTextColor} fontSize="14" textAnchor="middle">Lisbon</text>
        <text x="850" y="110" fill={svgTextColor} fontSize="14" textAnchor="middle">Vladivostok</text>
        <text x="750" y="300" fill={svgTextColor} fontSize="14" textAnchor="middle">New Delhi</text>
        <text x="450" y="360" fill={svgTextColor} fontSize="14" textAnchor="middle">Brazil</text>
      </svg>

      {/* Main content card wrapper for permanent gradient outline */}
      {/* This outer div provides the gradient background as the border */}
      <div className={`relative rounded-3xl shadow-xl ${cardOutlineGradient} p-[2px] max-w-xl mx-auto z-10`}> {/* p-[2px] creates the 2px border effect */}
        {/* Inner card content div, now with its own background */}
        <div className={`relative ${cardBgGradient} backdrop-blur-sm rounded-[calc(1.5rem-2px)] p-8 sm:p-12 text-center h-full w-full border ${cardBorderColor}`}>
          <h2 className={`text-3xl sm:text-4xl font-bold ${titleColor} mb-4 leading-tight`}>
            Join Our <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent"> Mission </span>
          </h2>
          <p className={`text-base sm:text-lg ${descriptionColor} mb-8`}>
            Help us reimagine the future of hiring in the tech industry.
          </p>

          {/* Button with Gradient Outline on Hover */}
          {/* Outer wrapper for button: provides relative context, rounded corners, shadow, and group hover state */}
          <div className={`relative rounded-lg shadow-lg overflow-hidden group inline-flex`}> {/* Changed rounded-full to rounded-lg */}
            {/* This div provides the gradient background for the hover outline */}
            <div
              className={`absolute inset-0 rounded-lg ${buttonHoverGradientOutline}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          `}>
            </div>

            {/* Actual button: now with solid black/gray background */}
            <button
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg ${buttonBgClass} ${buttonTextColor}
                          relative z-10
                          group-hover:scale-x-[0.98] group-hover:scale-y-[0.95]
                          transition-transform duration-300
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                          `}
            >
              Start Here
              <svg className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main7;
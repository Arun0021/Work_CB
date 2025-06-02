'use client';
import React from 'react';
import { ChevronDown, Sun, Moon } from "lucide-react"; // Ensure these are imported
import logo from "../assets/logo1.webp";

// Navbar now receives isDarkMode and toggleDarkMode as props
const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // Common classes for both light and dark mode navs
  const commonNavClasses = "fixed top-0 left-0 w-full z-50 p-4  transition-colors duration-300";
  // Reduced horizontal padding (px-4) and vertical padding (py-2) for the inner container
  const commonFirstDivClasses = "relative flex items-center space-x-6 px-4 py-2 rounded-sm border-[2px] shadow-md";
  // Reduced font size for nav links
  const commonNavLinkClasses = "text-sm font-medium"; // Changed from text-base to text-sm
  // Reduced dropdown link padding
  const commonDropdownDivClasses = "absolute hidden group-hover:block rounded-md mt-2 py-1 w-32 shadow-lg";
  const commonDropdownLinkClasses = "block px-3 py-1.5 text-sm"; // Reduced padding and font size
  // Reduced button padding and font size
  const commonButtonClasses = "flex items-center px-4 py-2 text-sm rounded-sm shadow-md transition-all duration-300 group border-[2px]"; // Reduced padding and font size
  // Reduced toggle button padding
  const commonToggleButtonClasses = "p-2 rounded-sm shadow-md transition-all duration-300 border-[2px]"; // Reduced padding
  const commonArrowIconClasses = "ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"; // Reduced size and margin

  // Conditional classes for the Navbar's main background
  const navbarBgClass = isDarkMode ? 'bg-transparent' : 'bg-transparent';
  const navbarShadowClass = isDarkMode ? '' : '';

  // Conditional classes for the inner elements' backgrounds and borders
  const innerDivBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const verticalBarBgClass = isDarkMode ? 'bg-gray-400' : 'bg-black';

  // Conditional classes for text colors
  const navLinkTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const navLinkHoverColor = isDarkMode ? 'hover:text-blue-400' : 'hover:text-purple-700';
  const activeLinkColor = isDarkMode ? 'text-blue-400' : 'text-purple-700';
  const activeLinkBorderColor = isDarkMode ? 'border-blue-400' : 'border-purple-700';
  const dropdownBgClass = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const dropdownHoverBgClass = isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100';

  // Conditional classes for buttons
  const buttonBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const buttonTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const buttonHoverBgOpacityClass = 'hover:bg-opacity-40';
  const gradientTextClass = "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text";
  const arrowIconColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  // Conditional classes for toggle button
  const toggleButtonBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const toggleButtonIconColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';


  return (
    <nav className={`${commonNavClasses} ${navbarBgClass} ${navbarShadowClass}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* First div: Logo and Navigation Links */}
        <div className={`${commonFirstDivClasses} ${innerDivBgBorderClass}`}>
          {/* Logo */}
          <div className="flex items-center">
            {/* Reduced logo size for better alignment with smaller text/buttons */}
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg">
              <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </div>
          </div>
          {/* Adjusted vertical bar height */}
          <div className="w-[1px] h-5 bg-gray-400"></div> {/* Vertical bar */}

          {/* Navigation Links - space-x-4 for slightly less spacing */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className={`${commonNavLinkClasses} ${navLinkTextColor} ${navLinkHoverColor}`}>Home</a>
            <a href="#" className={`${commonNavLinkClasses} ${navLinkTextColor} ${navLinkHoverColor}`}>Products</a>
            <div className="relative group">
              <a href="#" className={`${commonNavLinkClasses} ${navLinkTextColor} ${navLinkHoverColor} flex items-center`}>
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 ${arrowIconColorClass}`} />
              </a>
              {/* Dropdown example */}
              <div className={`${commonDropdownDivClasses} ${dropdownBgClass}`}>
                <a href="#" className={`${commonDropdownLinkClasses} ${navLinkTextColor} ${dropdownHoverBgClass}`}>Solution A</a>
                <a href="#" className={`${commonDropdownLinkClasses} ${navLinkTextColor} ${dropdownHoverBgClass}`}>Solution B</a>
              </div>
            </div>
            <a href="#" className={`${commonNavLinkClasses} ${navLinkTextColor} ${navLinkHoverColor}`}>Pricing</a>
            <a href="#" className={`${commonNavLinkClasses} ${navLinkTextColor} ${navLinkHoverColor}`}>Blog</a>
            <a href="#" className={`${commonNavLinkClasses} ${navLinkTextColor} ${navLinkHoverColor}`}>Support</a>
            <a href="#" className={`${commonNavLinkClasses} ${activeLinkColor} font-semibold border-b-2 ${activeLinkBorderColor} pb-1`}>About</a>
          </div>
        </div>

        {/* Third div: Request a Demo, Dark Mode Toggle, Login */}
        <div className="relative flex items-center space-x-3"> {/* Reduced space-x */}
          {/* Request a Demo Button */}
          <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass}`}>
            <span className={gradientTextClass}>
              Request a Demo
            </span>
            <svg className={`${commonArrowIconClasses} ${arrowIconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`${commonToggleButtonClasses} ${toggleButtonBgBorderClass} ${toggleButtonIconColorClass}`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" /> // Reduced icon size
            ) : (
              <Moon className="w-5 h-5" /> // Reduced icon size
            )}
          </button>

          {/* Login Button */}
          <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass}`}>
            Login
            <svg className={`${commonArrowIconClasses} ${arrowIconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

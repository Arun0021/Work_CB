'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import Image from 'next/image'; // Import Next.js Image component
import logo from "../assets/logo1.webp";

// Navbar now receives isDarkMode and toggleDarkMode as props
const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Common classes for both light and dark mode navs
  const commonNavClasses = "fixed top-0 left-0 w-full z-50 transition-colors duration-300 py-3 lg:py-4 backdrop-blur-sm";
  const commonFirstDivClasses = "relative flex items-center space-x-6 px-4 py-2 rounded-sm border-[2px] shadow-md";
  const commonNavLinkClasses = "text-sm font-medium";
  const commonDropdownDivClasses = "absolute hidden group-hover:block rounded-md mt-2 py-1 w-32 shadow-lg";
  const commonDropdownLinkClasses = "block px-3 py-1.5 text-sm";
  const commonButtonClasses = "flex items-center px-4 py-2 text-sm rounded-sm shadow-md transition-all duration-300 group border-[2px]";
  const commonToggleButtonClasses = "p-2 rounded-sm shadow-md transition-all duration-300 border-[2px]";
  const commonArrowIconClasses = "ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300";

  // Conditional classes for the Navbar's main background
  const navbarBgClass = 'bg-transparent'; // Main nav background is transparent
  const navbarShadowClass = '';

  // Conditional classes for the inner elements' backgrounds and borders
  const innerDivBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const verticalBarBgClass = 'bg-transparent'; // Vertical bar is transparent

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
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 xl:max-w-screen-xl">
        {/* Left section: Logo + Desktop Navigation Links */}
        {/* This div now explicitly uses innerDivBgBorderClass for its semi-transparent background */}
        <div className={`${commonFirstDivClasses} ${innerDivBgBorderClass}`}>
          {/* Logo */}
          <div className="flex items-center">
            {/* Using Next.js Image component and providing width/height */}
            <Image src={logo} alt="Logo" className="h-full w-full object-contain" width={28} height={28} />
          </div>

          {/* Vertical bar (now transparent) */}
          <div className={`w-[1px] h-5 border lg:block`}></div>

          {/* Navigation Links for desktop (hidden on mobile and medium screens) */}
          <div className="hidden lg:flex space-x-4 ml-1 items-center">
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
            <a href="#" className={`${commonNavLinkClasses} ${activeLinkColor} items-center font-semibold border-b-2 ${activeLinkBorderColor} `}>About</a>
          </div>
        </div>

        {/* Right section: Buttons for desktop, Dark Mode Toggle & Hamburger for mobile */}
        <div className="flex items-center space-x-3">
          {/* Request a Demo Button (hidden on mobile and medium screens) */}
          <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass} hidden lg:flex`}>
            <span className='font-bold'>
              Request a Demo
            </span>
            <svg className={`${commonArrowIconClasses} ${arrowIconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          

          {/* Dark Mode Toggle (visible on all sizes) */}
          <button
            onClick={toggleDarkMode}
            className={`${commonToggleButtonClasses} ${toggleButtonBgBorderClass} ${toggleButtonIconColorClass}`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Login Button (hidden on mobile and medium screens) */}
          <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass} font-bold hidden lg:flex`}>
            Login
            <svg className={`${commonArrowIconClasses} ${arrowIconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Hamburger Menu Icon (visible on mobile and medium screens, hidden on desktop) */}
          <button
            className={`lg:hidden ${commonToggleButtonClasses} ${toggleButtonBgBorderClass} ${toggleButtonIconColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (appears when toggled for mobile and medium screens) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex flex-col items-center justify-center space-y-8 z-40`}
      >
        {/* Close Button within Mobile Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute top-4 right-4 ${commonToggleButtonClasses} ${toggleButtonBgBorderClass} ${toggleButtonIconColorClass}`}
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Navigation Links */}
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Products</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Support</a>
        <a href="#" className={`text-lg font-medium ${activeLinkColor} font-semibold border-b-2 ${activeLinkBorderColor} pb-1`} onClick={() => setIsMobileMenuOpen(false)}>About</a>

        {/* Mobile Buttons */}
        <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass} text-base px-6 py-3`}>
          <span className={gradientTextClass}>
            Request a Demo
          </span>
          <svg className={`${commonArrowIconClasses} ${arrowIconColorClass} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass} text-base px-6 py-3`}>
          Login
          <svg className={`${commonArrowIconClasses} ${arrowIconColorClass} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

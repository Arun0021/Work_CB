'use client';
import React from 'react';
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/logo1.webp";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Common classes for both light and dark mode navs
  const commonNavClasses = "fixed top-0 left-0 w-full z-50 transition-colors duration-300 py-3 lg:py-4"; // Adjusted vertical padding breakpoint
  const commonFirstDivClasses = "relative flex items-center space-x-6 px-4 py-2 rounded-sm border-[2px] shadow-md";
  const commonNavLinkClasses = "text-sm font-medium";
  const commonDropdownDivClasses = "absolute hidden group-hover:block rounded-md mt-2 py-1 w-32 shadow-lg";
  const commonDropdownLinkClasses = "block px-3 py-1.5 text-sm";
  const commonButtonClasses = "flex items-center px-4 py-2 text-sm rounded-sm shadow-md transition-all duration-300 group border-[2px]";
  const commonToggleButtonClasses = "p-2 rounded-sm shadow-md transition-all duration-300 border-[2px]";
  const commonArrowIconClasses = "ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300";

  const navbarBgClass = isDarkMode ? 'bg-transparent' : 'bg-transparent';
  const navbarShadowClass = isDarkMode ? '' : '';

  const innerDivBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const verticalBarBgClass = isDarkMode ? 'bg-gray-400' : 'bg-black';

  const navLinkTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const navLinkHoverColor = isDarkMode ? 'hover:text-blue-400' : 'hover:text-purple-700';
  const activeLinkColor = isDarkMode ? 'text-blue-400' : 'text-purple-700';
  const activeLinkBorderColor = isDarkMode ? 'border-blue-400' : 'border-purple-700';
  const dropdownBgClass = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const dropdownHoverBgClass = isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100';

  const buttonBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const buttonTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const buttonHoverBgOpacityClass = 'hover:bg-opacity-40';
  const gradientTextClass = "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text";
  const arrowIconColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  const toggleButtonBgBorderClass = isDarkMode ? 'bg-gray-800 bg-opacity-30 border-gray-700' : 'bg-white bg-opacity-30 border-gray-300';
  const toggleButtonIconColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';


  return (
    <nav className={`${commonNavClasses} ${navbarBgClass} ${navbarShadowClass}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 xl:max-w-screen-xl">
        {/* Left section: Logo + Desktop Navigation Links */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">
            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
          </div>

          {/* Vertical bar (visible only on desktop) */}
          <div className={`w-[1px] h-5 ${verticalBarBgClass} hidden lg:block`}></div> {/* Changed md:block to lg:block */}

          {/* Navigation Links for desktop (hidden on mobile and medium screens) */}
          <div className="hidden lg:flex space-x-4 ml-6"> {/* Changed md:flex to lg:flex */}
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

        {/* Right section: Buttons for desktop, Dark Mode Toggle & Hamburger for mobile */}
        <div className="flex items-center space-x-3">
          {/* Request a Demo Button (hidden on mobile and medium screens) */}
          <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass} hidden lg:flex`}> {/* Changed md:flex to lg:flex */}
            <span className={gradientTextClass}>
              Request a Demo
            </span>
            <svg className={`${commonArrowIconClasses} ${arrowIconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Login Button (hidden on mobile and medium screens) */}
          <button className={`${commonButtonClasses} ${buttonBgBorderClass} ${buttonTextColor} ${buttonHoverBgOpacityClass} hidden lg:flex`}> {/* Changed md:flex to lg:flex */}
            Login
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

          {/* Hamburger Menu Icon (visible on mobile and medium screens, hidden on desktop) */}
          <button
            className={`lg:hidden ${commonToggleButtonClasses} ${toggleButtonBgBorderClass} ${toggleButtonIconColorClass}`} // Changed md:hidden to lg:hidden
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
        {/* Close Button within Mobile Menu (for accessibility/user experience) */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute top-4 right-4 ${commonToggleButtonClasses} ${toggleButtonBgBorderClass} ${toggleButtonIconColorClass}`}
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Navigation Links (adjusted text size for better readability on tablets/landscape phones) */}
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Home</a> {/* Changed text-xl to text-lg */}
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Products</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
        <a href="#" className={`text-lg font-medium ${navLinkTextColor} ${navLinkHoverColor}`} onClick={() => setIsMobileMenuOpen(false)}>Support</a>
        <a href="#" className={`text-lg font-medium ${activeLinkColor} font-semibold border-b-2 ${activeLinkBorderColor} pb-1`} onClick={() => setIsMobileMenuOpen(false)}>About</a>

        {/* Mobile Buttons (adjusted size for mobile/medium screens) */}
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
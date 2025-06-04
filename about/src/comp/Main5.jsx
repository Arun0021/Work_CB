'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import logo from "../assets/logo1.webp"; // Assuming this is the small icon above "How We Thrive"
import pic from "../assets/image5.jpg";    // Assuming this is the main image on the left

// Data for the six feature cards
const featureCardsData = [
  {
    title: "Community-Driven",
    description: "We build strong connections and foster collaboration within our team.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Innovation First",
    description: "We encourage creative thinking and novel approaches to challenges.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    title: "Action Oriented",
    description: "We transform ideas into tangible results through decisive action.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    title: "Continuous Growth",
    description: "We embrace learning and development as core principles.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    title: "Excellence Pursuit",
    description: "We strive for exceptional quality in everything we do.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    title: "Shared Success",
    description: "We celebrate achievements and grow together as one team.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
];

const Main5 = ({ isDarkMode }) => {
  // Common classes for various elements
  // Increased top padding to accommodate the absolute positioned logo
  const commonContainerClasses = "relative flex flex-col md:flex-row items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"; // Changed py-16 to pt-24 pb-16
  const commonLeftImageContainerClasses = "md:w-1/2 flex justify-center items-center p-4";
  const commonImageClasses = "max-w-full h-auto rounded-xl shadow-2xl";
  const commonRightContentClasses = "md:w-1/2 flex flex-col items-start text-center md:text-left p-4";
  // commonTopIconContainerClasses will now be for the absolutely positioned logo
  const commonTopIconContainerClasses = "w-16 h-16 rounded-full flex items-center justify-center"; // Removed mb as it's absolute
  const commonMainHeadingClasses = "text-3xl md:text-4xl font-bold leading-tight mb-3";
  const commonParagraphClasses = "text-base max-w-lg mb-6";
  const commonFeaturesGridClasses = "grid grid-cols-1 sm:grid-cols-2 gap-6 w-full";
  const commonFeatureCardClasses = "flex flex-col items-start p-5 rounded-xl shadow-md";
  const commonFeatureIconContainerClasses = "w-10 h-10 rounded-full flex items-center justify-center mb-3";
  const commonFeatureTitleClasses = "text-lg font-semibold mb-1";
  const commonFeatureDescriptionClasses = "text-sm";


  // Dynamic classes based on theme
  const containerBgClass = isDarkMode ? 'bg-gray-950' : 'bg-white';
  const containerTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  const topIconBgBorderShadowClass = isDarkMode ? 'bg-gray-800 border-[2px] border-gray-700 shadow-lg' : 'bg-white border-[2px] border-gray-300 shadow-lg';
  const mainHeadingColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const gradientTextFrom = isDarkMode ? 'from-purple-400' : 'from-purple-600';
  const gradientTextVia = isDarkMode ? 'via-blue-400' : 'via-blue-500';
  const gradientTextTo = isDarkMode ? 'to-yellow-400' : 'to-yellow-500';
  const paragraphColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-700';

  const featureCardBgBorderClass = isDarkMode ? 'bg-gray-800 border-[1px] border-gray-700' : 'bg-white border-[1px] border-gray-200';
  const featureIconBgClass = isDarkMode ? 'bg-purple-700' : 'bg-purple-500'; // Unified icon background
  const featureIconTextColor = 'text-white'; // Icon color is always white
  const featureTitleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const featureDescriptionColor = isDarkMode ? 'text-gray-400' : 'text-gray-700';


  return (
    <div className={`${commonContainerClasses} ${containerBgClass} ${containerTextColor}`}>
      {/* Absolute positioned logo at top center */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-10`}>
        <div className={`${commonTopIconContainerClasses} ${topIconBgBorderShadowClass}`}>
          {/* Using Next.js Image component */}
          <Image src={logo} alt="Logo Icon" className="w-8 h-8 object-contain" width={32} height={32} />
        </div>
      </div>

      {/* Left Div: Image */}
      <div className={commonLeftImageContainerClasses}>
        {/* Using Next.js Image component and providing width/height */}
        <Image
          src={pic}
          alt="Person working on laptop"
          className={commonImageClasses}
          width={584} // Example width, adjust as needed or use fill
          height={500} // Example height, adjust as needed or use fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
          priority // Consider adding priority if this is above the fold
        />
      </div>

      {/* Right Div: Content */}
      <div className={commonRightContentClasses}>
        <h2 className={`${commonMainHeadingClasses} ${mainHeadingColorClass}`}>
          How We <span className={`bg-gradient-to-r ${gradientTextFrom} ${gradientTextVia} ${gradientTextTo} text-transparent bg-clip-text`}>Thrive</span>
        </h2>
        <p className={`${commonParagraphClasses} ${paragraphColorClass}`}>
          At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn, and push boundaries—fostering shared growth and a relentless pursuit of excellence.
        </p>

        {/* Features Grid */}
        <div className={commonFeaturesGridClasses}>
          {featureCardsData.map((card, index) => (
            <div key={index} className={`${commonFeatureCardClasses} ${featureCardBgBorderClass}`}>
              <div className={`${commonFeatureIconContainerClasses} ${featureIconBgClass} ${featureIconTextColor}`}>
                {card.icon}
              </div>
              <h3 className={`${commonFeatureTitleClasses} ${featureTitleColor}`}>
                {card.title}
              </h3>
              <p className={`${commonFeatureDescriptionClasses} ${featureDescriptionColor}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main5;

'use client'; // This directive is crucial for client-side components in Next.js App Router

import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import ambitionImg from "../../assets/ambition.jpg";
import integrityImg from "../../assets/integrity.webp";
import satisfactionImg from "../../assets/satisfaction.avif";
import vigilanceImg from "../../assets/vigilance.jpg";

const contentData = {
  ambition: {
    title: "Connecting Talent and Opportunity",
    subtitle: "Ambition",
    description: "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
    listItems: [
      "Connect skilled developers with ideal roles",
      "Streamline tech recruitment process",
      "Create optimal candidate-company matches",
    ],
    image: ambitionImg,
  },
  satisfaction: {
    title: "Partnering for Success",
    subtitle: "Satisfaction",
    description: "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
    listItems: [
      "Dedicated partnership for hiring success",
      "Fuel company growth through talent",
      "Drive tech innovation through matching",
    ],
    image: satisfactionImg,
  },
  integrity: {
    title: "Building Trust in Hiring",
    subtitle: "Integrity",
    description: "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
    listItems: [
      "Build hiring confidence through transparency",
      "Prioritize trust in recruitment process",
      "Foster honest candidate-employer relationships",
    ],
    image: integrityImg,
  },
  vigilance: {
    title: "Security-Driven Solutions",
    subtitle: "Vigilance",
    description: "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
    listItems: [
      "Prioritize end-to-end platform security",
      "Ensure protected recruitment experience",
      "Build confidence through data protection",
    ],
    image: vigilanceImg,
  },
};

// Part2 now receives isDarkMode as a prop
const Part2 = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('ambition'); // Default active tab

  const currentContent = contentData[activeTab];

  // Common classes for various elements (to reduce duplication)
  // Ensure commonContainerClasses has 'relative' for absolute children
  // Also added 'overflow-hidden' to clip the blur if it goes outside the section
  const commonContainerClasses = "relative flex flex-col items-center justify-center py-16 px-4 md:px-8 overflow-hidden w-[1800px] m-auto";
  const commonButtonContainerClasses = "flex flex-wrap justify-center gap-4 mb-8 ";
  const commonButtonClasses = "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ";
  // Adjusted commonContentCardClasses for better responsiveness on small screens
  const commonContentCardClasses = "w-full max-w-6xl rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8";
  const commonTextContentClasses = "md:w-1/2 flex flex-col justify-center text-center md:text-left";
  const commonImageContainerClasses = "md:w-1/2 flex justify-center items-center ";
  // Removed fixed width/height from commonImageClasses, will use Next.js Image props
  const commonImageClasses = " h-[400px] rounded-xl shadow-lg w-[543px]";
  const commonListItemClasses = "flex items-start mb-2"; 
  const commonListIconClasses = "w-4 h-4 mr-2 flex-shrink-0";

  // Dynamic classes based on theme
  const containerTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  // Dynamic colors for the background grid pattern and circle
  // Updated for the exact shades and opacity from your provided div
  const newBgGridLineColor = isDarkMode ? '#8080800a' : '#8080800a'; // This specific color has low opacity, so it's subtle in both modes
  const newBgCircleColor = isDarkMode ? 'bg-fuchsia-600' : 'bg-fuchsia-400';
  const newBgOuterDivColor = isDarkMode ? 'bg-gray-950' : 'bg-white'; // Matches the base background of the section

  const buttonActiveBg = isDarkMode ? 'bg-purple-600' : 'bg-purple-300';
  const buttonActiveText = 'text-white';
  const buttonActiveBorder = isDarkMode ? 'border-purple-700' : 'border-purple-600';
  const buttonInactiveBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const buttonInactiveText = isDarkMode ? 'text-gray-300' : 'text-gray-800';
  const buttonInactiveBorder = isDarkMode ? 'border-gray-600' : 'border-gray-300';
  const buttonInactiveHoverBg = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  const contentCardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const contentCardTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtitleColor = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  const descriptionColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const listItemColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const listIconColor = isDarkMode ? 'text-purple-400' : 'text-purple-600';

  return (
    <div className={`${commonContainerClasses} ${containerTextColor}`}>

      {/* Background Pattern and Pinkish Blur - NEWLY ADDED */}
      {/* This div uses the exact structure and classes you provided */}
      <div className={`absolute inset-0 -z-10 h-full w-full ${newBgOuterDivColor}`}>
        {/* Grid lines */}
        <div
          className={`absolute bottom-0 left-0 right-0 top-0`}
          style={{
            // The backgroundImage uses the dynamically chosen grid line color
            backgroundImage: `linear-gradient(to right, ${newBgGridLineColor} 1px, transparent 1px), linear-gradient(to bottom, ${newBgGridLineColor} 1px, transparent 1px)`,
            backgroundSize: '14px 24px',
            // Mask image remains, causing the grid to fade at the top
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
          }}
        ></div>
        {/* Pinkish blur circle */}
        {/* Opacity for the blur circle is confirmed at opacity-20 */}
        <div className={`absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full ${newBgCircleColor} opacity-20 blur-[100px]`}></div>
      </div>

      {/* Buttons - Z-index for these elements to be above the background */}
      {/* Ensure all content elements have a z-index higher than -z-10 */}
      <div className={`${commonButtonContainerClasses} z-10`}>
        {Object.keys(contentData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`${commonButtonClasses}
              ${activeTab === key
                ? `${buttonActiveBg} ${buttonActiveText} ${buttonActiveBorder}`
                : `${buttonInactiveBg} ${buttonInactiveText} ${buttonInactiveBorder} ${buttonInactiveHoverBg}`
              }`}
          >
            {contentData[key].subtitle}
          </button>
        ))}
      </div>

      {/* Content Card - Z-index for this element to be above the background */}
      {/* Ensure all content elements have a z-index higher than -z-10 */}
      <div className={`${commonContentCardClasses} ${contentCardBg} ${contentCardTextColor} z-10`}>
        {/* Left Content */}
        <div className={commonTextContentClasses}>
          <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
            {currentContent.title}
          </h3>
          <p className={`text-lg sm:text-xl font-semibold mb-4 ${subtitleColor}`}>
            {currentContent.subtitle}
          </p>
          <p className={`text-sm sm:text-base mb-6 ${descriptionColor}`}>
            {currentContent.description}
          </p>
          <ul className="list-none p-0">
            {currentContent.listItems.map((item, index) => (
              <li key={index} className={`${commonListItemClasses} ${listItemColor}`}>
                <svg className={`${commonListIconClasses} ${listIconColor}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className={commonImageContainerClasses}>
          {/* Using Next.js Image component and providing width/height */}
          <Image
            src={currentContent.image}
            alt={currentContent.subtitle}
            className={commonImageClasses}
            // width={543} // Original width, adjust as needed or use fill
            // height={400} // Original height, adjust as needed or use fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
            priority // Consider adding priority if this is above the fold
          />
        </div>
      </div>
    </div>
  );
};

export default Part2;
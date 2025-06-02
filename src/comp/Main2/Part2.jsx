import React, { useState } from 'react';
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

const Part2 = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('ambition'); // Default active tab

  const currentContent = contentData[activeTab];

  // Common classes for various elements (to reduce duplication)
  const commonContainerClasses = "flex flex-col items-center justify-center py-16 px-4 md:px-8";
  const commonButtonContainerClasses = "flex flex-wrap justify-center gap-4 mb-12";
  const commonButtonClasses = "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-[2px]";
  const commonContentCardClasses = "w-full max-w-6xl rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8";
  const commonTextContentClasses = "md:w-1/2 flex flex-col justify-center text-center md:text-left";
  const commonImageContainerClasses = "md:w-1/2 flex justify-center items-center";
  const commonImageClasses = "w-[543px] h-[400px] rounded-xl shadow-lg";
  const commonListItemClasses = "flex items-start mb-2";
  const commonListIconClasses = "w-4 h-4 mr-2 flex-shrink-0";


  return (
    <>
      {isDarkMode ? (
        // --- DARK MODE Part2 ---
        <div className={`${commonContainerClasses} bg-gray-950 text-gray-200`}>
          {/* Buttons */}
          <div className={commonButtonContainerClasses}>
            {Object.keys(contentData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`${commonButtonClasses}
                  ${activeTab === key
                    ? 'bg-purple-700 text-white border-purple-700'
                    : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                  }`}
              >
                {contentData[key].subtitle}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className={`${commonContentCardClasses} bg-gray-800 text-gray-200`}>
            {/* Left Content */}
            <div className={commonTextContentClasses}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {currentContent.title}
              </h3>
              <p className="text-xl font-semibold mb-4 text-purple-400">
                {currentContent.subtitle}
              </p>
              <p className="text-base mb-6 text-gray-300">
                {currentContent.description}
              </p>
              <ul className="list-none p-0">
                {currentContent.listItems.map((item, index) => (
                  <li key={index} className={`${commonListItemClasses} text-gray-300`}>
                    <svg className={`${commonListIconClasses} text-purple-400`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className={commonImageContainerClasses}>
              <img
                src={currentContent.image}
                alt={currentContent.subtitle}
                className={commonImageClasses}
              />
            </div>
          </div>
        </div>
      ) : (
        // --- LIGHT MODE Part2 ---
        <div className={`${commonContainerClasses} bg-white text-gray-800`}>
          {/* Buttons */}
          <div className={commonButtonContainerClasses}>
            {Object.keys(contentData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`${commonButtonClasses}
                  ${activeTab === key
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                  }`}
              >
                {contentData[key].subtitle}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className={`${commonContentCardClasses} bg-white text-gray-800`}>
            {/* Left Content */}
            <div className={commonTextContentClasses}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {currentContent.title}
              </h3>
              <p className="text-xl font-semibold mb-4 text-purple-600">
                {currentContent.subtitle}
              </p>
              <p className="text-base mb-6 text-gray-700">
                {currentContent.description}
              </p>
              <ul className="list-none p-0">
                {currentContent.listItems.map((item, index) => (
                  <li key={index} className={`${commonListItemClasses} text-gray-700`}>
                    <svg className={`${commonListIconClasses} text-purple-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className={commonImageContainerClasses}>
              <img
                src={currentContent.image}
                alt={currentContent.subtitle}
                className={commonImageClasses}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Part2;
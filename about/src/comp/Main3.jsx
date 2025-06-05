'use client';

import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo1.webp";
import pic from "../assets/main3.svg";

const Main3 = ({ isDarkMode }) => {
  // Common classes for various elements
  const commonContainerClasses = "relative flex flex-col items-center py-12 px-4 md:px-8 overflow-hidden w-[1800px] m-auto";
  const commonTopIconContainerClasses = "relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-10";
  const commonContentWrapperClasses = "w-full max-w-6xl flex flex-col md:flex-row items-center gap-8";
  const commonLeftContentClasses = " ml-5 md:w-1/2 flex flex-col items-start text-center md:text-left";
  const commonHeadingClasses = "text-3xl md:text-4xl font-bold leading-tight mb-3";
  const commonSubheadingClasses = "text-base mb-6";
  const commonFeaturesGridClasses = "grid grid-cols-1 sm:grid-cols-2 gap-5 w-full";
  // commonFeatureCardClasses will now be applied to the inner content div
  const commonFeatureCardClasses = "flex flex-col items-start p-5 rounded-xl shadow-md"; // Original card styling
  const commonFeatureIconContainerClasses = "w-9 h-9 rounded-full flex items-center justify-center mb-3";
  const commonFeatureTitleClasses = "text-lg font-semibold mb-1";
  const commonFeatureDescriptionClasses = "text-sm";
  const commonRightImageContainerClasses = "md:w-1/2 flex justify-center items-center p-4";
  // commonImageClasses will include transition and hover scale
  const commonImageClasses = "max-w-full h-auto rounded-xl transition-transform duration-300 hover:scale-x-105"; // Added transition and hover scale

  // Dynamic classes based on theme
  const containerBgClass = isDarkMode ? 'bg-gray-950' : 'bg-white';
  const containerTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';

  const topIconBgBorderShadowClass = isDarkMode ? 'bg-gray-800 border-[2px] border-gray-700 shadow-lg' : 'bg-white border-[2px] border-gray-300 shadow-lg';
  const headingColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const subheadingColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-700';

  // Card specific classes (base background and border)
  const featureCardBgBorderClass = isDarkMode ? 'bg-gray-800 border-[1px] border-gray-700' : 'bg-white border-[1px] border-gray-200';
  const featureTitleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const featureDescriptionColor = isDarkMode ? 'text-gray-400' : 'text-gray-700';

  // Feature icon background colors
  const aiIconBg = isDarkMode ? 'bg-purple-700' : 'bg-purple-500';
  const humanCentricIconBg = isDarkMode ? 'bg-blue-700' : 'bg-blue-500';
  const skillAssessmentIconBg = isDarkMode ? 'bg-green-700' : 'bg-green-500';
  const futureReadyIconBg = isDarkMode ? 'bg-yellow-700' : 'bg-yellow-500';

  // Gradient for the card outline on hover (same as button gradient)
  const cardGradientOutline = 'bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400';

  return (
    <div className={`${commonContainerClasses} ${containerBgClass} ${containerTextColor}`}>
      {/* Top Icon */}
      <div className={`${commonTopIconContainerClasses} ${topIconBgBorderShadowClass}`}>
        <Image src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" width={40} height={40} />
      </div>

      <div className={commonContentWrapperClasses}>
        {/* Left Content */}
        <div className={commonLeftContentClasses}>
          <h2 className={`${commonHeadingClasses} ${headingColorClass}`}>
            <strong>The<span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent"> Story </span></strong>Behind Us
          </h2>
          <p className={`${commonSubheadingClasses} ${subheadingColorClass}`}>
            It all started with one question: What if hiring didn't have to feel like gambling on a hunch?
          </p>

          <div className={commonFeaturesGridClasses}>
            {/* Feature Card 1: AI-Powered - Gradient Hover */}
            <div className={`relative rounded-xl overflow-hidden group`}> {/* Outer wrapper for gradient */}
              <div className={`absolute inset-0 rounded-xl ${cardGradientOutline} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`${commonFeatureCardClasses} ${featureCardBgBorderClass} relative z-10 transition-transform duration-300 group-hover:scale-[0.98]`}> {/* Inner content */}
                <div className={`${commonFeatureIconContainerClasses} ${aiIconBg} text-white`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                </div>
                <h3 className={`${commonFeatureTitleClasses} ${featureTitleColor}`}>AI-Powered</h3>
                <p className={`${commonFeatureDescriptionClasses} ${featureDescriptionColor}`}>
                  Advanced AI/ML algorithms for precise matching
                </p>
              </div>
            </div>

            {/* Feature Card 2: Human-Centric - Gradient Hover */}
            <div className={`relative rounded-xl overflow-hidden group`}>
              <div className={`absolute inset-0 rounded-xl ${cardGradientOutline} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`${commonFeatureCardClasses} ${featureCardBgBorderClass} relative z-10 transition-transform duration-300 group-hover:scale-[0.98]`}>
                <div className={`${commonFeatureIconContainerClasses} ${humanCentricIconBg} text-white`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <h3 className={`${commonFeatureTitleClasses} ${featureTitleColor}`}>Human-Centric</h3>
                <p className={`${commonFeatureDescriptionClasses} ${featureDescriptionColor}`}>
                  Built by recruiters, for
                  <br />
                   recruiters
                  
                </p>
              </div>
            </div>

            {/* Feature Card 3: Skill Assessment - Gradient Hover */}
            <div className={`relative rounded-xl overflow-hidden group`}>
              <div className={`absolute inset-0 rounded-xl ${cardGradientOutline} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`${commonFeatureCardClasses} ${featureCardBgBorderClass} relative z-10 transition-transform duration-300 group-hover:scale-[0.98]`}>
                <div className={`${commonFeatureIconContainerClasses} ${skillAssessmentIconBg} text-white`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.74-7 8.99V12H5V6.3l7-3.11v8.8z"/></svg>
                </div>
                <h3 className={`${commonFeatureTitleClasses} ${featureTitleColor}`}>Skill Assessment</h3>
                <p className={`${commonFeatureDescriptionClasses} ${featureDescriptionColor}`}>
                  Comprehensive skill evaluation system
                </p>
              </div>
            </div>

            {/* Feature Card 4: Future-Ready - Gradient Hover */}
            <div className={`relative rounded-xl overflow-hidden group`}>
              <div className={`absolute inset-0 rounded-xl ${cardGradientOutline} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`${commonFeatureCardClasses} ${featureCardBgBorderClass} relative z-10 transition-transform duration-300 group-hover:scale-[0.98]`}>
                <div className={`${commonFeatureIconContainerClasses} ${futureReadyIconBg} text-white`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.6 3.33 1.93 4.33 3.56zM12 4c.69 0 1.37.08 2.03.24l-1.26 2.49c-.6-.2-1.23-.33-1.87-.33-.74 0-1.45.14-2.12.39L9.01 4.24C9.67 4.08 10.35 4 11.04 4H12zm-8.05 8c0-.67.08-1.34.24-2.01l2.49 1.26c-.2.6-.33 1.23-.33 1.87 0 .74.14 1.45.39 2.12L4.24 14.99c-.16-.66-.24-1.34-.24-2.01zm11.95 6c-.69 0-1.37-.08-2.03-.24l1.26-2.49c.6.2 1.23.33 1.87.33.74 0 1.45-.14 2.12-.39L14.99 19.76c.16.66.24 1.34.24 2.01z"/></svg>
                </div>
                <h3 className={`${commonFeatureTitleClasses} ${featureTitleColor}`}>Future-Ready</h3>
                <p className={`${commonFeatureDescriptionClasses} ${featureDescriptionColor}`}>
                  Constantly evolving with industry needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image - Scale with transition */}
        <div className={commonRightImageContainerClasses}>
          <Image
            src={pic}
            alt="Team collaborating in a meeting room"
            className={commonImageClasses} // commonImageClasses now includes the hover scale and transition
            width={584}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Main3;
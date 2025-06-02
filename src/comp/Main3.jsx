import React from 'react';
import logo from "../assets/logo1.webp"; // Assuming this is the small icon at the top
import pic from "../assets/main3.svg";   // Assuming this is the main image on the right

const Main3 = ({ isDarkMode }) => {
  // Common classes for various elements - ADJUSTED SIZES AND ALIGNMENT
  const commonContainerClasses = "relative flex flex-col items-center py-12 px-4 md:px-8 overflow-hidden"; // Reduced py-16 to py-12
  const commonTopIconContainerClasses = "relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-10"; // Reduced w/h, mb
  const commonContentWrapperClasses = "w-full max-w-6xl flex flex-col md:flex-row items-center gap-8"; // Reduced max-w-7xl to max-w-6xl, changed items-start to items-center, reduced gap-12 to gap-8
  const commonLeftContentClasses = " ml-5 md:w-1/2 flex flex-col items-start text-center md:text-left";
  const commonHeadingClasses = "text-3xl md:text-4xl font-bold leading-tight mb-3"; // Reduced text-4xl/5xl to 3xl/4xl, reduced mb
  const commonSubheadingClasses = "text-base mb-6"; // Reduced text-lg to text-base, reduced mb
  const commonFeaturesGridClasses = "grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"; // Reduced gap-6 to gap-5
  const commonFeatureCardClasses = "flex flex-col items-start p-5 rounded-xl shadow-md"; // Reduced p-6 to p-5
  const commonFeatureIconContainerClasses = "w-9 h-9 rounded-full flex items-center justify-center mb-3"; // Reduced w/h, mb
  const commonFeatureTitleClasses = "text-lg font-semibold mb-1"; // Reduced text-xl to text-lg, reduced mb
  const commonFeatureDescriptionClasses = "text-sm"; // Reduced text-base to text-sm
  const commonRightImageContainerClasses = "md:w-1/2 flex justify-center items-center p-4";
  const commonImageClasses = "w-[584px] h-[500px] rounded-xl ";


  return (
    <>
      {isDarkMode ? (
        // --- DARK MODE Main3 ---
        <div className={`${commonContainerClasses} bg-gray-950 text-gray-200`}>
          {/* Top Icon */}
          <div className={`${commonTopIconContainerClasses} bg-gray-800 border-[2px] border-gray-700 shadow-lg`}>
            <img src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" /> {/* Reduced icon size */}
          </div>

          <div className={commonContentWrapperClasses}>
            {/* Left Content */}
            <div className={commonLeftContentClasses}>
              <h2 className={`${commonHeadingClasses} text-white`}>
                The Story Behind Us
              </h2>
              <p className={`${commonSubheadingClasses} text-gray-400`}>
                It all started with one question: What if hiring didn't have to feel like gambling on a hunch?
              </p>

              <div className={commonFeaturesGridClasses}>
                {/* Feature Card 1: AI-Powered */}
                <div className={`${commonFeatureCardClasses} bg-gray-800 border-[1px] border-gray-700`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-purple-700 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-white`}>AI-Powered</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-400`}>
                    Advanced AI/ML algorithms for precise matching
                  </p>
                </div>

                {/* Feature Card 2: Human-Centric */}
                <div className={`${commonFeatureCardClasses} bg-gray-800 border-[1px] border-gray-700`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-blue-700 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-white`}>Human-Centric</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-400`}>
                    Built by recruiters, for recruiters
                  </p>
                </div>

                {/* Feature Card 3: Skill Assessment */}
                <div className={`${commonFeatureCardClasses} bg-gray-800 border-[1px] border-gray-700`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-green-700 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.74-7 8.99V12H5V6.3l7-3.11v8.8z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-white`}>Skill Assessment</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-400`}>
                    Comprehensive skill evaluation system
                  </p>
                </div>

                {/* Feature Card 4: Future-Ready */}
                <div className={`${commonFeatureCardClasses} bg-gray-800 border-[1px] border-gray-700`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-yellow-700 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.6 3.33 1.93 4.33 3.56zM12 4c.69 0 1.37.08 2.03.24l-1.26 2.49c-.6-.2-1.23-.33-1.87-.33-.74 0-1.45.14-2.12.39L9.01 4.24C9.67 4.08 10.35 4 11.04 4H12zm-8.05 8c0-.67.08-1.34.24-2.01l2.49 1.26c-.2.6-.33 1.23-.33 1.87 0 .74.14 1.45.39 2.12L4.24 14.99c-.16-.66-.24-1.34-.24-2.01zm11.95 6c-.69 0-1.37-.08-2.03-.24l1.26-2.49c.6.2 1.23.33 1.87.33.74 0 1.45-.14 2.12-.39L14.99 19.76c.16.66.24 1.34.24 2.01z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-white`}>Future-Ready</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-400`}>
                    Constantly evolving with industry needs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={commonRightImageContainerClasses}>
              <img
                src={pic}
                alt="Team collaborating in a meeting room"
                className={commonImageClasses}
              />
            </div>
          </div>
        </div>
      ) : (
        // --- LIGHT MODE Main3 ---
        <div className={`${commonContainerClasses} bg-white text-gray-800`}>
          {/* Top Icon */}
          <div className={`${commonTopIconContainerClasses} bg-white border-[2px] border-gray-300 shadow-lg`}>
            <img src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" /> {/* Reduced icon size */}
          </div>

          <div className={commonContentWrapperClasses}>
            {/* Left Content */}
            <div className={commonLeftContentClasses}>
              <h2 className={`${commonHeadingClasses} text-gray-900`}>
                The Story Behind Us
              </h2>
              <p className={`${commonSubheadingClasses} text-gray-700`}>
                It all started with one question: What if hiring didn't have to feel like gambling on a hunch?
              </p>

              <div className={commonFeaturesGridClasses}>
                {/* Feature Card 1: AI-Powered */}
                <div className={`${commonFeatureCardClasses} bg-white border-[1px] border-gray-200`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-purple-500 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-gray-900`}>AI-Powered</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-700`}>
                    Advanced AI/ML algorithms for precise matching
                  </p>
                </div>

                {/* Feature Card 2: Human-Centric */}
                <div className={`${commonFeatureCardClasses} bg-white border-[1px] border-gray-200`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-blue-500 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-gray-900`}>Human-Centric</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-700`}>
                    Built by recruiters, for recruiters
                  </p>
                </div>

                {/* Feature Card 3: Skill Assessment */}
                <div className={`${commonFeatureCardClasses} bg-white border-[1px] border-gray-200`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-green-500 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.74-7 8.99V12H5V6.3l7-3.11v8.8z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-gray-900`}>Skill Assessment</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-700`}>
                    Comprehensive skill evaluation system
                  </p>
                </div>

                {/* Feature Card 4: Future-Ready */}
                <div className={`${commonFeatureCardClasses} bg-white border-[1px] border-gray-200`}>
                  <div className={`${commonFeatureIconContainerClasses} bg-yellow-500 text-white`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.6 3.33 1.93 4.33 3.56zM12 4c.69 0 1.37.08 2.03.24l-1.26 2.49c-.6-.2-1.23-.33-1.87-.33-.74 0-1.45.14-2.12.39L9.01 4.24C9.67 4.08 10.35 4 11.04 4H12zm-8.05 8c0-.67.08-1.34.24-2.01l2.49 1.26c-.2.6-.33 1.23-.33 1.87 0 .74.14 1.45.39 2.12L4.24 14.99c-.16-.66-.24-1.34-.24-2.01zm11.95 6c-.69 0-1.37-.08-2.03-.24l1.26-2.49c.6.2 1.23.33 1.87.33.74 0 1.45-.14 2.12-.39L14.99 19.76c.16.66.24 1.34.24 2.01z"/></svg>
                  </div>
                  <h3 className={`${commonFeatureTitleClasses} text-gray-900`}>Future-Ready</h3>
                  <p className={`${commonFeatureDescriptionClasses} text-gray-700`}>
                    Constantly evolving with industry needs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={commonRightImageContainerClasses}>
              <img
                src={pic}
                alt="Team collaborating in a meeting room"
                className={commonImageClasses}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main3;
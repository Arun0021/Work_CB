'use client';
import React, { useState, useEffect, useRef } from 'react';
import pic1 from "../../assets/stackcard1.jpg"; // Everything AI 2.0 (Card 3 in logic)
import pic2 from "../../assets/stackcard2.jpg"; // ML Integration (Card 2 in logic)
import pic3 from "../../assets/stackcard3.jpg"; // The Beginning (Card 1 in logic)

// Original Data for the stacking cards (Card 1, Card 2, Card 3)
const cardsData = [
  {
    id: 'card-2022', // Card 1: The Beginning
    title: "The Beginning",
    year: "2022",
    description: "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
    stats: [
      { value: "10+", label: "Features" },
      { value: "1M+", label: "Data Processed" },
      { value: "1K+", label: "Clients" },
    ],
    image: pic3,
  },
  {
    id: 'card-2023', // Card 2: ML Integration
    title: "ML Integration",
    year: "2023",
    description: "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
    stats: [
      { value: "+30%", label: "Accuracy" },
      { value: "15+", label: "Integrations" },
      { value: "25K+", label: "Users" },
    ],
    image: pic2,
  },
  {
    id: 'card-2024', // Card 3: Everything AI 2.0
    title: "Everything AI 2.0",
    year: "2024",
    description: "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    stats: [
      { value: "50K+", label: "Users" },
      { value: "98%", label: "Accuracy" },
      { value: "2x faster", label: "Processing" },
    ],
    image: pic1,
  },
];

// Define the full sequence of cards to be displayed
const fullDisplaySequence = [
  cardsData[0], // 1 (The Beginning)
  cardsData[1], // 2 (ML Integration)
  cardsData[2], // 3 (Everything AI 2.0)
];

const Part2 = ({ isDarkMode }) => {
  // We no longer need activeCardIndex for this stacking method
  // and the scroll logic becomes simpler, relying on sticky positioning.

  // --- Common Classes ---
  const commonContainerClasses = "relative w-full px-4 md:px-8";
  // Each card will take up a full viewport height, so total height will be based on card count
  const totalScrollHeight = `${fullDisplaySequence.length * 100}vh`;

  const commonStickyCardWrapperClasses = "sticky w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-xl shadow-lg border overflow-hidden";
  const fixedCardHeight = "h-[500px]"; // Fixed height for the entire visual card, adjust as needed

  // Individual card content layout inside the slider
  const commonIndividualCardContentClasses = "flex flex-col md:flex-row w-full h-full flex-shrink-0"; // flex-shrink-0 ensures they don't shrink

  // Left text content part of an individual card
  const commonTextContentClasses = "md:w-1/2 p-6 flex flex-col justify-between";
  const commonImageContainerClasses = "md:w-1/2 flex justify-center items-center rounded-xl overflow-hidden";

  // Text Sizes (Adjusted)
  const commonYearTextClasses = "text-2xl md:text-3xl font-bold mb-4";
  const commonDescriptionTextClasses = "text-base text-gray-300 mb-6";
  const commonStatCardClasses = "p-4 rounded-lg flex flex-col items-center justify-center";
  const commonStatValueClasses = "text-xl font-bold";
  const commonStatLabelClasses = "text-sm";

  // Dynamic top offset for each sticky card
  const getStickyTopOffset = (index) => {
    // You can adjust the increment (e.g., 0, 4, 8, 12, etc.) for more or less overlap
    return `${index * 4}px`;
  };

  return (
    <>
      {isDarkMode ? (
        // --- DARK MODE Part2 ---
        <div
          className={`${commonContainerClasses} bg-gray-950 text-gray-200 py-16`}
          // We set min-height on the parent to ensure enough scroll space for sticky elements
          style={{ minHeight: totalScrollHeight }}
        >
          {fullDisplaySequence.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`${commonStickyCardWrapperClasses} ${fixedCardHeight} bg-gray-800 border-gray-700`}
              style={{ top: getStickyTopOffset(index) }} // Apply dynamic sticky top
            >
              <div className={`${commonIndividualCardContentClasses}`}>
                {/* Left Content Card */}
                <div className={`${commonTextContentClasses} md:w-1/2`}>
                  <div>
                    <p className="text-sm font-semibold uppercase text-purple-400 mb-2">
                      {card.title}
                    </p>
                    <h3 className={`${commonYearTextClasses} text-white`}>
                      {card.year}
                    </h3>
                    <p className={`${commonDescriptionTextClasses} text-gray-300`}>
                      {card.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {card.stats.map((stat, statIndex) => (
                      <div key={statIndex} className={`${commonStatCardClasses} bg-gray-700 text-white`}>
                        <span className={commonStatValueClasses}>{stat.value}</span>
                        <span className={commonStatLabelClasses}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className={`${commonImageContainerClasses} md:w-1/2`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // --- LIGHT MODE Part2 ---
        <div
          className={`${commonContainerClasses} bg-white text-gray-800 py-16`}
          style={{ minHeight: totalScrollHeight }}
        >
          {fullDisplaySequence.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`${commonStickyCardWrapperClasses} ${fixedCardHeight} bg-white border-gray-200`}
              style={{ top: getStickyTopOffset(index) }}
            >
              <div className={`${commonIndividualCardContentClasses}`}>
                {/* Left Content Card */}
                <div className={`${commonTextContentClasses} md:w-1/2`}>
                  <div>
                    <p className="text-sm font-semibold uppercase text-purple-600 mb-2">
                      {card.title}
                    </p>
                    <h3 className={`${commonYearTextClasses} text-gray-900`}>
                      {card.year}
                    </h3>
                    <p className={`${commonDescriptionTextClasses} text-gray-700`}>
                      {card.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {card.stats.map((stat, statIndex) => (
                      <div key={statIndex} className={`${commonStatCardClasses} bg-gray-100 text-gray-900`}>
                        <span className={commonStatValueClasses}>{stat.value}</span>
                        <span className={commonStatLabelClasses}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className={`${commonImageContainerClasses} md:w-1/2`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Part2;
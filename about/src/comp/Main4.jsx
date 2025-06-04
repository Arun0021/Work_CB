'use client'; // This directive is crucial for client-side components in Next.js App Router

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import logo from "../assets/logo1.webp"; // Assuming this is the logo for the top section

// Data for the grid cards, now including responsive colSpan for layout
const valueCardsData = [
  // Row 1
  {
    id: '01',
    title: 'No Surprises',
    description: 'With us, there are no surprises—just straight talk and genuine commitment.',
    hashtag: '#HONESTY',
    // Responsive colSpan: full width on mobile, half on sm, third on md, quarter on lg
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1',
    bgColorLight: 'bg-yellow-200',
    bgColorDark: 'bg-yellow-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },
  {
    id: '03',
    title: 'Act with Urgency',
    description: 'We act with urgency to ensure progress and deliver results efficiently. Every moment matters.',
    hashtag: '#AGILITY',
    // Responsive colSpan: full width on mobile, full on sm, two-thirds on md, half on lg
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2',
    bgColorLight: 'bg-purple-200',
    bgColorDark: 'bg-purple-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },
  {
    id: '02',
    title: 'Embrace Hard Work',
    description: 'We believe in the power of dedication and effort to achieve extraordinary results.',
    hashtag: '#HARDWORK',
    // Responsive colSpan: full width on mobile, half on sm, third on md, quarter on lg
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1',
    bgColorLight: 'bg-orange-200',
    bgColorDark: 'bg-orange-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },

  // Row 2
  {
    id: '05',
    title: 'Aim Higher',
    description: "We're here to help you aim higher, break limits, and achieve what others might think impossible.",
    hashtag: '#ASPIRATION',
    // Responsive colSpan: full width on mobile, full on sm, two-thirds on md, half on lg
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2',
    bgColorLight: 'bg-green-200',
    bgColorDark: 'bg-green-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },
  {
    id: '06',
    title: 'Do Hard Things',
    description: 'We tackle challenges head-on with resilience and determination.',
    hashtag: '#RESILIENT',
    // Responsive colSpan: full width on mobile, full on sm, two-thirds on md, half on lg
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2',
    bgColorLight: 'bg-gray-300',
    bgColorDark: 'bg-gray-600',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },

  // Row 3
  {
    id: '04',
    title: 'Grow 1% Every Day',
    description: 'Commit to continuous learning and improvement, pushing boundaries daily.',
    hashtag: '#GROWTHMINDSET',
    // Responsive colSpan: full width on mobile, half on sm, third on md, quarter on lg
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1',
    bgColorLight: 'bg-lime-200',
    bgColorDark: 'bg-lime-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },
  {
    id: '07',
    title: 'Value Fresh Ideas',
    description: 'We value fresh ideas, bold solutions, and the freedom to imagine what\'s next.',
    hashtag: '#CREATIVITY',
    // Responsive colSpan: full width on mobile, half on sm, third on md, quarter on lg
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1',
    bgColorLight: 'bg-red-200',
    bgColorDark: 'bg-red-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },
  {
    id: '08',
    title: 'Commit to Learning',
    description: 'Commit to continuous learning and improvement, fostering a culture of knowledge.',
    hashtag: '#LEARNING',
    // Responsive colSpan: full width on mobile, full on sm, two-thirds on md, half on lg
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2',
    bgColorLight: 'bg-blue-200',
    bgColorDark: 'bg-blue-700',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },

  // Row 4
  {
    id: '10',
    title: 'Contribute to Greater',
    description: 'Every project, every solution we create is aimed at contributing to something greater.',
    hashtag: '#CONTRIBUTION',
    // Responsive colSpan: full width on mobile, full on sm, two-thirds on md, half on lg
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2',
    bgColorLight: 'bg-yellow-400',
    bgColorDark: 'bg-yellow-800',
    textColorLight: 'text-gray-900',
    textColorDark: 'text-gray-100',
  },
  {
    id: '09',
    title: 'Build Trust',
    description: 'Build trust through actions, not just words. Integrity is our cornerstone.',
    hashtag: '#TRUST',
    // Responsive colSpan: full width on mobile, full on sm, two-thirds on md, half on lg
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2',
    bgColorLight: 'bg-red-400',
    bgColorDark: 'bg-red-800',
    textColorLight: 'text-white',
    textColorDark: 'text-gray-100',
  },
];


const Main4 = ({ isDarkMode }) => {
  // Common classes for various elements - ADJUSTED TEXT SIZES AND PADDING
  const commonContainerClasses = "relative flex flex-col items-center py-16 px-4 md:px-8 overflow-hidden";
  const commonTopSectionClasses = "flex flex-col items-center text-center mb-12 max-w-4xl mx-auto";
  const commonTopIconContainerClasses = "w-20 h-20 rounded-full flex items-center justify-center mb-6";
  const commonSmallHeadingClasses = "text-sm font-semibold uppercase mb-2";
  const commonMainHeadingClasses = "text-4xl md:text-5xl font-extrabold leading-tight mb-4";
  const commonParagraphClasses = "text-lg max-w-2xl mx-auto";

  // Responsive grid definition:
  // grid-cols-1 for default (mobile)
  // sm:grid-cols-2 for small screens (e.g., phones landscape, small tablets)
  // md:grid-cols-3 for medium screens (e.g., larger tablets)
  // lg:grid-cols-4 for large screens (desktops)
  const commonGridContainerClasses = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto";

  // Reduced padding from p-6 to p-4 for better fit on small cards, kept fixed height
  const commonCardClasses = "relative p-4 rounded-xl shadow-md flex flex-col justify-between h-48";
  const commonCardIdClasses = "absolute top-4 right-4 text-xl font-bold";
  // Adjusted text sizes for better responsiveness
  const commonCardTitleClasses = "text-lg font-bold mb-1"; // Reduced from text-xl
  const commonCardDescriptionClasses = "text-sm mb-2 flex-grow"; // Reduced from text-base
  const commonCardHashtagClasses = "text-xs font-semibold";

  // Dynamic classes based on theme
  const mainBgClass = isDarkMode ? 'bg-gray-950' : 'bg-white';
  const mainTextColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const topIconBgBorderShadowClass = isDarkMode ? 'bg-gray-800 border-[2px] border-gray-700 shadow-lg' : 'bg-white border-[2px] border-gray-300 shadow-lg';
  const smallHeadingColorClass = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  const mainHeadingColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const paragraphColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-700';
  const gradientTextFrom = isDarkMode ? 'from-purple-400' : 'from-purple-600';
  const gradientTextVia = isDarkMode ? 'via-blue-400' : 'via-blue-500';
  const gradientTextTo = isDarkMode ? 'to-yellow-400' : 'to-yellow-500';


  return (
    <div className={`${commonContainerClasses} ${mainBgClass} ${mainTextColorClass}`}>
      {/* Top Section */}
      <div className={commonTopSectionClasses}>
        <div className={`${commonTopIconContainerClasses} ${topIconBgBorderShadowClass}`}>
          {/* Using Next.js Image component */}
          <Image src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" width={40} height={40} />
        </div>
        <p className={`${commonSmallHeadingClasses} ${smallHeadingColorClass}`}>
          Our Values
        </p>
        <h2 className={`${commonMainHeadingClasses} ${mainHeadingColorClass}`}>
          Our Philosophy in <span className={`bg-gradient-to-r ${gradientTextFrom} ${gradientTextVia} ${gradientTextTo} text-transparent bg-clip-text`}>Action</span>
        </h2>
        <p className={`${commonParagraphClasses} ${paragraphColorClass}`}>
          At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
        </p>
      </div>

      {/* Grid Section */}
      <div className={commonGridContainerClasses}>
        {valueCardsData.map((card) => (
          <div
            key={card.id}
            className={`${commonCardClasses} ${card.colSpan} ${isDarkMode ? card.bgColorDark : card.bgColorLight} ${isDarkMode ? card.textColorDark : card.textColorLight}`}
          >
            <span className={commonCardIdClasses}>{card.id}</span>
            <div>
              <h3 className={commonCardTitleClasses}>{card.title}</h3>
              <p className={commonCardDescriptionClasses}>{card.description}</p>
            </div>
            <p className={commonCardHashtagClasses}>{card.hashtag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main4;

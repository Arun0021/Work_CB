import React from 'react';
import logo from "../assets/logo1.webp"; // Assuming this is the logo for the top section

// Data for the grid cards, now including colSpan for layout
const valueCardsData = [
  // Row 1
  {
    id: '01',
    title: 'No Surprises',
    description: 'With us, there are no surprises—just straight talk and genuine commitment.',
    hashtag: '#HONESTY',
    colSpan: 'col-span-1', // Corresponds to 'a'
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
    colSpan: 'col-span-2', // Corresponds to 'b'
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
    colSpan: 'col-span-1', // Corresponds to 'c'
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
    colSpan: 'col-span-2', // Corresponds to 'd'
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
    colSpan: 'col-span-2', // Corresponds to 'e'
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
    colSpan: 'col-span-1', // Corresponds to 'f'
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
    colSpan: 'col-span-1', // Corresponds to 'g'
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
    colSpan: 'col-span-2', // Corresponds to 'h'
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
    colSpan: 'col-span-2', // Corresponds to 'i'
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
    colSpan: 'col-span-2', // Corresponds to 'j'
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
  const commonGridContainerClasses = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl mx-auto";
  // Reduced padding from p-6 to p-5, kept fixed height
  const commonCardClasses = "relative p-5 rounded-xl shadow-md flex flex-col justify-between h-48";
  const commonCardIdClasses = "absolute top-4 right-4 text-xl font-bold";
  // Reduced text-2xl to text-xl, reduced mb-2 to mb-1
  const commonCardTitleClasses = "text-xl font-bold mb-1";
  // Reduced text-base to text-sm, reduced mb-4 to mb-2
  const commonCardDescriptionClasses = "text-sm mb-2 flex-grow";
  const commonCardHashtagClasses = "text-xs font-semibold"; // Reduced from text-sm to text-xs


  return (
    <>
      {isDarkMode ? (
        // --- DARK MODE Main4 ---
        <div className={`${commonContainerClasses} bg-gray-950 text-gray-200`}>
          {/* Top Section */}
          <div className={commonTopSectionClasses}>
            <div className={`${commonTopIconContainerClasses} bg-gray-800 border-[2px] border-gray-700 shadow-lg`}>
              <img src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" />
            </div>
            <p className={`${commonSmallHeadingClasses} text-purple-400`}>
              Our Values
            </p>
            <h2 className={`${commonMainHeadingClasses} text-white`}>
              Our Philosophy in <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 text-transparent bg-clip-text">Action</span>
            </h2>
            <p className={`${commonParagraphClasses} text-gray-400`}>
              At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
            </p>
          </div>

          {/* Grid Section */}
          <div className={commonGridContainerClasses}>
            {valueCardsData.map((card) => (
              <div
                key={card.id}
                className={`${commonCardClasses} ${card.colSpan} ${card.bgColorDark} ${card.textColorDark}`}
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
      ) : (
        // --- LIGHT MODE Main4 ---
        <div className={`${commonContainerClasses} bg-white text-gray-800`}>
          {/* Top Section */}
          <div className={commonTopSectionClasses}>
            <div className={`${commonTopIconContainerClasses} bg-white border-[2px] border-gray-300 shadow-lg`}>
              <img src={logo} alt="Logo Icon" className="w-10 h-10 object-contain" />
            </div>
            <p className={`${commonSmallHeadingClasses} text-purple-600`}>
              Our Values
            </p>
            <h2 className={`${commonMainHeadingClasses} text-gray-900`}>
              Our Philosophy in <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-500 text-transparent bg-clip-text">Action</span>
            </h2>
            <p className={`${commonParagraphClasses} text-gray-700`}>
              At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
            </p>
          </div>

          {/* Grid Section */}
          <div className={commonGridContainerClasses}>
            {valueCardsData.map((card) => (
              <div
                key={card.id}
                className={`${commonCardClasses} ${card.colSpan} ${card.bgColorLight} ${card.textColorLight}`}
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
      )}
    </>
  );
};

export default Main4;
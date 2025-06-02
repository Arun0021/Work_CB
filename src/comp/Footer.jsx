'use client';
import React from 'react';
import logo from "../assets/logo1.webp"
import bg from "../assets/sf.png"; // This is the San Francisco skyline background image

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-12 overflow-hidden">
      {/* Top section of the footer */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
        {/* Left Section: Logo, Description, Social Icons */}
        <div className="md:col-span-1">
          {/* Placeholder for "Everything Talent" logo */}
          <div className="flex items-center mb-4">
            {/* Simple colored circles to represent the logo from the image */}
            <img src={logo} alt="" />
            <h3 className="text-2xl font-bold text-white">Everything Talent</h3>
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-xs">
            Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.497.24-4.333 2.173-4.385 5.542-.052 3.369.072 9.16 0 12.427.052 3.369.888 5.302 4.385 5.542 3.604.246 11.631.245 15.23 0 3.497-.24 4.333-2.173 4.385-5.542.052-3.369-.072-9.16 0-12.427-.052-3.369-.888-5.302-4.385-5.542zm-7.615 10.816v-8l6 4-6 4z" />
              </svg>
            </a>
            {/* Instagram (represented by 'in' in the image, but usually Instagram or Twitter) */}
            {/* Assuming 'in' means Instagram, if it's Twitter/X, swap the SVG */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.924.38 4.246.668 3.566.955 2.975 1.384 2.467 1.897A4.99 4.99 0 00.668 4.246C.38 4.924.132 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.278.308 2.129.596 2.807.287.68.716 1.271 1.229 1.778a4.99 4.99 0 002.807 1.229c.678.288 1.529.536 2.807.596C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.06 2.129-.308 2.807-.596.68-.287 1.271-.716 1.778-1.229a4.99 4.99 0 001.229-2.807c.288-.678.536-1.529.596-2.807.014-1.278.072-1.684.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.308-2.129-.596-2.807a4.99 4.99 0 00-1.229-1.778 4.99 4.99 0 00-2.807-1.229c-.678-.288-1.529-.536-2.807-.596C15.667.014 15.26 0 12 0zm0 2.16c3.2 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.42.602.247 1.095.587 1.594 1.082.5.494.834.987 1.082 1.595.17.422.364 1.057.42 2.227.054 1.265.07 1.65.07 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.42 2.227-.247.602-.587 1.095-1.082 1.594-.494.5-1.077.834-1.595 1.082-.422.17-1.057.364-2.227.42-1.265.054-1.65.07-4.85.07s-3.585-.016-4.85-.071c-1.17-.055-1.805-.249-2.227-.42-.602-.247-1.095-.587-1.594-1.082-.5-.494-.834-.987-1.082-1.595-.17-.422-.364-1.057-.42-2.227C2.16 15.667 2.16 15.26 2.16 12s.016-3.585.071-4.85c.055-1.17.249-1.805.42-2.227.247-.602.587-1.095 1.082-1.594.494-.5.834-.987 1.595-1.082.422-.17 1.057-.364 2.227-.42C8.333 2.16 8.74 2.16 12 2.16zm0 3.635c-3.402 0-6.165 2.764-6.165 6.165 0 3.402 2.763 6.165 6.165 6.165 3.402 0 6.165-2.763 6.165-6.165 0-3.401-2.763-6.165-6.165-6.165zm0 10.165c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm5.5-10.435a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Resources Column */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">RESOURCES</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Blogs</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Success Stories</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Whitepapers</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Hiring Guides</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
          </ul>
        </div>

        {/* Get Started Column */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">GET STARTED</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Hiring Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Funded Startups</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Free Trial</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Request Demo</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Trust</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">LEGAL</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">CCPA Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: City Skyline Background and Branding */}
      <div
        className="relative w-full h-64 mt-8" // Adjust height as needed
        style={{
          backgroundImage: {bg},
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center', // Ensure the skyline is visible at the bottom
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay to darken the background image slightly for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* "EVERYTHINGTALENT.AI" text */}
        <div className="absolute bottom-4 right-4 text-white text-3xl sm:text-4xl font-extrabold tracking-wider z-10">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            EVERYTHINGTALENT.AI 
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

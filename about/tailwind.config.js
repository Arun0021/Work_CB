// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Ensure this line covers your app directory
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this line to cover your src folder
  ],
  theme: {
    extend: {
      keyframes: {
        // Define the 'spin' keyframe
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        // Define custom animation utilities using the 'spin' keyframe
        'spin-20s': 'spin 20s linear infinite', // For the smaller circle
        'spin-25s': 'spin 25s linear infinite', // For the larger circle
      },
    },
  },
  plugins: [],
}
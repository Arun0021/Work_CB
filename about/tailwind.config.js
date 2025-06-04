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
    extend: {},
  },
  plugins: [],
}
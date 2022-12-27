/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assests/banner.jpg')",
        'hero-image': "url('/src/assests/banner_pic.jpg')",
        'hero-img': "url('/src/assests/header.jpg')",
        
      }
    },
  },
  plugins: [require("daisyui")],
}

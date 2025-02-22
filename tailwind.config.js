/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" // ✅ Correct path for Flowbite React
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        'nav': '#131010',
        'active': '#FFF0DC',
        'btm-footer': '#543A14',
        'footer': '#FFF0DC',
        'logo': '#131010',
        'impact': '#0c4169',
      },
      backgroundImage: {
        'addVolunteer': "url('addVolunteerHeader.jpeg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
    flowbite, // ✅ Correct way to use Flowbite plugin
  ],
};

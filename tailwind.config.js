/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  ],
}


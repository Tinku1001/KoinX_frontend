/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
      },
      screens: {
        'lg':{max: '1350px', min:'1030px'},
        'md':{max: '1030px' ,min:'670px'},
        'sm':{max: '669px',min:'100px'},

        
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
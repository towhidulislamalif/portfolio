/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#64FFDA',
        highlighter: '#CCD6F6',
        'card-background': '#112240',
        'grayish-blue': '#8892B0',
        'dark-blue': '#0A192F',

        footer: '#0b1523',
        intro: '#1c2431',
        'call-to-action': '#65e2d9',
        'call-to-action-gradient': ' #339ecc',
        main: '#53D4BA',
      },
    },
    fontFamily: {
      DM: ['DM Serif Display', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

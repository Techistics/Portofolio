/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      filter: {
        green: 'invert(1) hue-rotate(90deg)',
      },
      screens: {
        'md-to-xs': { 'min': '3.125rem', 'max': '61.9375rem' },
        'sm-to-xs': { 'min': '3.125rem', 'max': '47.9375rem' },
        'xs': { 'min': '3.125rem', 'max': '36rem' },
        'sm': { 'min': '36rem', 'max': '47.9375rem' },
        'md': { 'min': '48rem', 'max': '61.9375rem' },
        'lg': { 'min': '62rem', 'max': '75rem' },
        '1xl': { 'min': '75rem', 'max': '95.9375rem' },
        '2xl': { 'min': '624.9375rem' },
      },
      colors: {
        background_light: "#EEEEEE",
        background_dark: "#1F1F1F",
        white: "#fff",
        text_g: "#28E98C",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.5xl'),
          // color: theme('colors.color') // Adjust color as needed
        },
        'h2': {
          fontSize: theme('fontSize.4xl'),
          // color: theme('colors.color') // Adjust color as needed
        },
        'h3': {
          fontSize: theme('fontSize.3xl'),
          // color: theme('colors.color') // Adjust color as needed
        },
        'h4': {
          fontSize: theme('fontSize.2xl'),
          // color: theme('colors.color') // Adjust color as needed
        },
        'h5': {
          fontSize: theme('fontSize.xl'),
          // color: theme('colors.color') // Adjust color as needed
        },
        'h6': {
          fontSize: theme('fontSize.lg'),
          // color: theme('colors.color') // Adjust color as needed
        },
      });
    }
  ],
};

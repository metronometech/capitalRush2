/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'mb': '1220px', 
      },
      backgroundColor: {
        'navBtn-gradient': 'var(--new-button, linear-gradient(180deg, #FAF51C 1.27%, #F67408 100%))',
      },
      colors: {
        gray: {
          "100": "#8d8d8d",
          "200": "#27223f",
          "300": "#100b26",
          "400": "#080612",
          "500": "#05040d",
          "600": "rgba(127, 125, 135, 0.5)",
        },
        white: "#fff",
        plum: "rgba(181, 158, 243, 0.15)",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        quicksand: "Quicksand",
        beatrice: "Beatrice",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "mid-7": "17.7px",
        "2xl-5": "21.5px",
        "206xl": "225px",
        "5xs-2": "7.2px",
        "mid-5": "17.5px",
        "10xl-3": "29.3px",
      },
    },
    fontSize: {
      xl: "20px",
      "31xl": "50px",
      "13xl": "32px",
      "mid-8": "17.8px",
      "7xl-4": "26.4px",
      "2xl-9": "21.9px",
      base: "16px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  plugins: [
    require('flowbite/plugin')
],
  corePlugins: {
    preflight: false,
  },
};
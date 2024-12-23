/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik_Regular", "sans-serif"],
        "rubik-bold": ["Rubik_Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semiold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-Light": ["Rubik-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF",
          200: "#0061FF1A",
          300: "#0061FF2A",
        },
        accents:{
          100:'#FBFBD'
        },
        black:{
          DEFAULT:'#000000',
          100:'#8C8E98',
          200:'#666876',
          300:'#191d31',
        },
        danger:'#F75555'
      },
    },
  },
  plugins: [],
};

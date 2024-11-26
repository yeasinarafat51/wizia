
/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "Work Sans":['"Work Sans"', "sans-serif"],
        "Montserrat":['"Montserrat"', "sans-serif"],
        "Bebas Neue":['"Bebas Neue"', "sans-serif"],
      },
      colors: {
        primary: "#0FF1F6",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
 
}


import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
        neonGreen: "#A4FFAF",
        aWhite: "#E6E5EA",
        grey: "#817D92",
        darkGrey: "#24232C",
        vDarkGrey: "#18171F",
      },
      fontFamily: {
        JetBrains: ["JetBrains"],
      },
    },
  },
  plugins: [],
};

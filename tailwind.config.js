/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F45E2",
        secondary: "#F4F9FF",
      },
      screens: {
        xmd: "912px",
      },
      fontFamily: {
        lufga: ["Lufga", "sans-serif"],
      },
    },
  },
  plugins: [],
};

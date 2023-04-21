/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Great: "Great Vibes, cursive",
        Bebas: "Bebas Neue",
        Robo: "Roboto Condensed"
      },

     
      colors: {
        "gray-d": "#181823",
      },
    },
  },
  plugins: [],
};

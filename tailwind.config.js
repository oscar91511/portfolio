/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Great: "Great Vibes, cursive",
        Bebas: "Bebas Neue",
      },

     
      colors: {
        "gray-d": "#181823",
      },
    },
  },
  plugins: [],
};

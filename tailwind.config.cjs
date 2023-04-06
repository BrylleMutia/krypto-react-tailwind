/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#000235",
            secondary: "#8080D7",
            accent: "#AAD9D9",
            dimWhite: "rgba(255, 255, 255, 0.7)",
            dimBlue: "rgba(9, 151, 124, 0.1)",
            featured: "rgba(99, 88, 189, 0.19)",
         },
         fontFamily: {
            roboto: ["Roboto", "sans-serif"],
            outfit: ["Outfit", "sans-serif"],
         },
      },
   },
   plugins: [],
};

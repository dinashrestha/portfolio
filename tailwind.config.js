/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm//*.js",
  ],
  theme: {
     extend: {
      colors:{
        primary:"#ffff",
        secondary:"#FF5733",
        neutralDGrey:"#4D4D4D",
        neutralSilver:"#F5F7FA",
        brandPrimary: "#2980B9",
                 blues:"#5DADE2",
         hedingColor: "#E67E22",
         navbar: "#EBF5FB",
         textC: "#E67E22",
       },
       fontFamily: {
         sans: ["Source Sans 3"],
         josefin: ["Josefin Sans"],
         poppins:["Poppins"]
       }, 
       boxShadow: {
        shadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        
       },
    },
  },
  plugins: [require("flowbite/plugin"),],
}
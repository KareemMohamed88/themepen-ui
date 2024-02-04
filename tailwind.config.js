/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "639px",

      md: "800px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      spacing: {
        "500px": "500px",
        "100%": "100%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "32%": "32%",
        "30%": "30%",
        "20%": "20%",
        "10%": "10%",
        "480px": "480px",
        "400px": "400px",
        "330px": "330px",
        "300px": "300px",
        "70px": "70px",
      },
      colors: {
        mainColor: "#4e67eb",
        speceficSection: "#e7e8fa",
        darkBg: "#1d1d39",
        bgColor: "#f4f5fa"
      },
      fontSize: {
        "60px": "45px",
      },
      boxShadow:{
        "compShadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        "darkShadow": "rgba(250, 250, 250, 0.15) 0px 7px 29px 0px",
        "cardShadow" : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "darkCardShadow" : "rgba(49, 57, 65, 0.2) 0px 8px 24px",
      }
    },
  },
  darkMode: "class",
  plugins: [],
};

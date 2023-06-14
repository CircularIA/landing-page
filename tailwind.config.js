/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default{
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gradientStart: "#007E4E",
        gradientEnd: "#00B971"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: theme => ({
        'navbar-gradient': `linear-gradient(to right, ${theme('colors.gradientStart')}, ${theme('colors.gradientEnd')})`,
      }),
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

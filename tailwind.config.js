module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
      robo: ["Roboto", "sans-serif"],
    },
    screens: {
      sm: "300px",
      md: "760px",
      lg: "1024px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

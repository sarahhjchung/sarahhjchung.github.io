/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    fontFamily: {
      serif: ["Hahmlet", "serif"],
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#FFFCFA",
        text: "#0B0805",
        primary: "#076BCF",
        secondary: "#FCD1A6",
        accent: "#243956",
      },
    },
  },
  plugins: [],
};

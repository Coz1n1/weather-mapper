/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotating: {
          "0%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(360.0deg)" },
        },
      },
      animation: {
        rotate: "rotating 10s linear infinite",
      },
    },
  },
  plugins: [],
};

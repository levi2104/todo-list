/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-md": "717px",
        "custom-md-2": "560px",
      },
      colors: {
        neonRed: "#FF3131",
        neonBlue: "#00FFFF",
        neonPurple: "#8A2BE2",
        darkBg: "#0a0a0a",
        whiteText: "#ffffff",
      },
    },
  },
  plugins: [],
};

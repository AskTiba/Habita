/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        persimmon: "#F35B04",
        tangerine: "#f18701",
        gray: "#909cc2",
        timberwolf: "#D6D1CD",
        mintcream: "#909cc2",
      },
    },
  },
  plugins: [],
};

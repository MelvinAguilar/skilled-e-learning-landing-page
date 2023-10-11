/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "1.56",
      },
      colors: {
        "neon-pink": "linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)",
        haiti: "#13183F",
        "oslo-gray": "#83869A",
        "french-gray": "#F74780",
        "carnation-pink": "#FFA7C3",
        "waikawa-gray": "#666CA3",
      },
    },
  },
  plugins: [],
};

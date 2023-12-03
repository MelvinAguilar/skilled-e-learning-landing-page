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
        "oslo-gray": "#555568",
        "french-gray": "#F74780",
        "carnation-pink": "#FFA7C3",
        "waikawa-gray": "#666CA3",
      },
      padding: {
        "top-default": "3.9375rem",
      },
      gap: {
        "default": "1.375rem",
      },
      maxWidth: {
        "container": "73.3125rem",
      },
    },
  },
  plugins: [],
};

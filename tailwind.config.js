const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["**/*.html", "**/*.{jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "app-bg": "#111827",
        "search-bg": "#4B5563",
        "light-yellow": "#FEF3C7",
        "requester-bg": "#FEF3C7",
        "yellow-dark": "#FD9D36",
        "darker-gray": "#1F2937",
        "medium-gray": "#4B5563",
        "normal-gray": "#9CA3AF",
        "request-text": "#787878",
        current: "#ffffff",
      },
      width: {
        "card-width": "232px",
        "card-width-xl": "280px",
        "popular-film-thumbnail": "120px",
        "popular-film-width": "380px",
        "73px": "73px",
        "100px": "100px",
        "366px": "366px",
      },
      height: {
        "popular-film-thumbnail": "120px",
        "128px": "128px",
        "73px": "73px",
        "100px": "100px",
      },
    },
  },

  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

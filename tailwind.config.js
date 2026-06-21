/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // These hex values came straight from the assignment brief / DevTools
        // color picker on the live reference page. Keeping them as named
        // tokens means if the brand color ever changes, we edit ONE line
        // here instead of hunting through every component for "#3A57E8".
        primary: {
          DEFAULT: "#3A57E8",
          50: "#EEF1FD",
          100: "#D9DFFB",
        },
        info: {
          DEFAULT: "#08B1BA",
        },
        page: "#F5F6FA", // the light grey background behind the cards
        "border-soft": "#E7E9F3", // thin borders on sidebar / cards
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(20, 30, 80, 0.06)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

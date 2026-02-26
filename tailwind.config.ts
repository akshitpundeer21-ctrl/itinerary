import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EE",
        deep: "#1A1208",
        gold: "#C9952A",
        "gold-light": "#E8B84B",
        rust: "#8B3A1C",
        muted: "#8A7A60",
        sand: "#F5EFE0",
        white: "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        doordash: {
          red: "#FF3008",
          darkRed: "#C41E00",
          black: "#191919",
          gray: "#767676",
          lightGray: "#F5F5F5",
          white: "#FFFFFF",
        },
        theater: {
          curtain: "#8B0000",
          curtainLight: "#B22222",
          gold: "#FFD700",
          goldDark: "#DAA520",
          velvet: "#4A0404",
          dark: "#1A0A0A",
        },
      },
      fontFamily: {
        marquee: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      animation: {
        "curtain-left": "curtainLeft 1s ease-out forwards",
        "curtain-right": "curtainRight 1s ease-out forwards",
        "light-flicker": "flicker 2s infinite alternate",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "pulse-gold": "pulseGold 2s infinite",
        "bulb-glow": "bulbGlow 1.5s ease-in-out infinite alternate",
        "reveal-item": "revealItem 0.6s ease-out forwards",
        "shake": "shake 0.5s ease-in-out",
        "confetti": "confetti 1s ease-out forwards",
      },
      keyframes: {
        curtainLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        curtainRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700" },
          "50%": { textShadow: "0 0 20px #FFD700, 0 0 40px #FFD700" },
        },
        bulbGlow: {
          "0%": { filter: "brightness(0.7)", transform: "scale(0.95)" },
          "100%": { filter: "brightness(1.2)", transform: "scale(1.05)" },
        },
        revealItem: {
          "0%": { opacity: "0", transform: "scale(0.5) rotateY(90deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotateY(0deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-10px)" },
          "40%": { transform: "translateX(10px)" },
          "60%": { transform: "translateX(-10px)" },
          "80%": { transform: "translateX(10px)" },
        },
        confetti: {
          "0%": { opacity: "1", transform: "translateY(0) rotate(0deg)" },
          "100%": { opacity: "0", transform: "translateY(-200px) rotate(720deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

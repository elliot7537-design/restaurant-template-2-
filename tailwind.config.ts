import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0C0A08",
          soft: "#15110D",
          elevated: "#1C1814",
        },
        ivory: {
          DEFAULT: "#F4EBDB",
          dim: "#D8CFBE",
        },
        muted: "#8A7E6E",
        line: "rgba(244, 235, 219, 0.1)",
        gold: {
          DEFAULT: "#C9A96A",
          deep: "#A3854A",
        },
        wine: "#7A1E1E",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        soft: "0 24px 60px -20px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

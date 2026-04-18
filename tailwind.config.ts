import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF5E9",
          warm: "#F5ECD8",
          paper: "#EFE4CB",
          deep: "#E4D4B2",
        },
        espresso: {
          DEFAULT: "#2C1810",
          soft: "#4A2F20",
        },
        wine: {
          DEFAULT: "#8B1E2E",
          deep: "#5C1420",
          soft: "#B04050",
        },
        gold: {
          DEFAULT: "#B8853A",
          bright: "#D4A250",
          deep: "#8B6524",
        },
        rose: "#E8C8BF",
        sage: "#8B9D7F",
        muted: "#8B7355",
        line: "rgba(44, 24, 16, 0.12)",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3.75rem, 11vw, 10rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
      },
      boxShadow: {
        warm: "0 24px 60px -20px rgba(92, 20, 32, 0.25)",
        soft: "0 12px 40px -12px rgba(44, 24, 16, 0.18)",
        lift: "0 30px 80px -30px rgba(44, 24, 16, 0.35)",
      },
      animation: {
        "slow-spin": "spin 40s linear infinite",
        "reverse-spin": "reverse-spin 50s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        sway: "sway 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        "reverse-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

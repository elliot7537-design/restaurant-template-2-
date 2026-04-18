import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5EFE6",
          dark: "#EBE2D3",
        },
        burgundy: {
          DEFAULT: "#7A1E1E",
          deep: "#4A1212",
          soft: "#9B3636",
        },
        ink: "#1F140E",
        muted: "#6B5A4E",
        gold: "#B8935A",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(31, 20, 14, 0.18)",
        pill: "0 8px 24px -8px rgba(122, 30, 30, 0.45)",
      },
      animation: {
        "slow-spin": "spin 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

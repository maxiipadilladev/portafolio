import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo 500
        "primary-dark": "#4f46e5", // Indigo 600
        secondary: "#ec4899", // Pink 500
        accent: "#8b5cf6", // Violet 500
        dark: "#0f172a", // Slate 900
        "dark-light": "#1e293b", // Slate 800
        "dark-lighter": "#334155", // Slate 700
        text: "#e2e8f0", // Slate 200
        "text-muted": "#94a3b8", // Slate 400
        success: "#10b981", // Emerald 500
        warning: "#f59e0b", // Amber 500
        background: "#0f172a",
        foreground: "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeInScale: "fadeInScale 0.3s ease-out forwards",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

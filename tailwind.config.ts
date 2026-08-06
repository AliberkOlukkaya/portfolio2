import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Liquid-glass palette — sampled from the hero video:
        // soft peach/rose → magenta/fuchsia → violet → indigo/blue,
        // grounded on a deep violet-navy base.
        base: {
          DEFAULT: "#07060f", // near-black, faint violet cast
          800: "#0c0a1a",
          700: "#120e24",
        },
        navy: {
          900: "#0d1030",
          800: "#141a44",
          700: "#1e2559",
        },
        purple: {
          DEFAULT: "#8b5cf6",
          400: "#b79bff",
          500: "#9d78ff",
          600: "#8b5cf6",
          700: "#6d40e0",
          900: "#2c1a63",
        },
        // Liquid accent stops for gradients & glows
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        },
        magenta: {
          400: "#e879f9",
          500: "#d64ff0",
          600: "#c026d3",
        },
        rose: {
          300: "#fecdd3",
          400: "#fda4af",
          500: "#fb7cae",
        },
        ink: {
          DEFAULT: "#f6f2ff",
          muted: "#aca6cc",
          dim: "#736e94",
        },
        line: "#241f3f",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        heading: ["var(--font-space-grotesk)", "'Space Grotesk'", "sans-serif"],
        body: ["var(--font-dm-sans)", "'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px -18px rgba(157, 120, 255, 0.55), 0 0 40px -20px rgba(214, 79, 240, 0.4)",
        "glow-sm": "0 0 34px -12px rgba(157, 120, 255, 0.45)",
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "float-slower": "float 20s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "liquid-pan": "liquidPan 16s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-30px, 20px) scale(0.97)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        liquidPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-brand-hover": "var(--color-background-brand-hover)",
        "color-border-brand-default": "var(--color-border-brand-default)",
        "color-primitives-brand-800": "var(--color-primitives-brand-800)",
        "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
        "system-colors-overlays-default": "var(--system-colors-overlays-default)",
      },
      fontFamily: {
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
    },
  },
  plugins: [],
};
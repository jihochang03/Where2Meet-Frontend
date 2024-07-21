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
        "logo-blue": "#0064FF",
        "logo-black": "#202632"
      },
      fontFamily: {
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
      screens: {
        pointerhover: { 'raw': '(hover: hover) and (pointer: fine)' },
      },
      keyframes: {
        moveCart: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadePaw: {
          '0%, 100%': { opacity: '0' },
          '10%': { opacity: '1' },
        },
      },
      animation: {
        moveCart: 'moveCart 3s linear infinite',
        fadePaw: 'fadePaw 2s linear infinite',
      },
    },
  },
  plugins: [],
};
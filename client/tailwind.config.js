/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  daisyui: {
    themes: [      {
      light: {
        "primary": "#570df8",
        "primary-focus": "#4506cb",
        "primary-content": "#ffffff",
        "secondary": "#f000b8",
        "secondary-focus": "#bd0091",
        "secondary-content": "#ffffff",
        "neutral": "#3d4451",
        "neutral-focus": "#2a2e37",
        "neutral-content": "#ffffff",
        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#d1d5db",
        "base-content": "#1f2937",
        "info": "#2094f3",
        "success": "#009485",
        "warning": "#ff9900",
        "error": "#ff5724",
      },
      dark: {
        "primary": "#7f5af0",
        "primary-focus": "#6246ea",
        "primary-content": "#ffffff",
        "secondary": "#d1d1e9",
        "secondary-focus": "#b8b8d1",
        "secondary-content": "#ffffff",
        "neutral": "#2a2e37",
        "neutral-focus": "#16181d",
        "neutral-content": "#ffffff",
        "base-100": "#1f2937",
        "base-200": "#2a2e37",
        "base-300": "#3f4553",
        "base-content": "#ebecf0",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      }
    }
  ], // Enable light and dark themes
  },
};

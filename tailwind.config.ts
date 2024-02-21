/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      neutral: {
        Background: "#FFFFFF",
        Lightest: "#F8F9FC",
        Lighter: "#F1F3F9",
        Light: "#E1E6EF",
        Default: "#3F444D",
        Dark: "#23272F",
        Darker: "#1B1F27",
        Darkest: "#0A0D14",
        transparent: "#ffffff00",
        Black: "#000000",
      },
      primary: {
        Background: "#F0FDF3",
        Default: "#69EE88",
      },
      secondary: {
        Background: "#E8ECED",
        Default: "#345261",
      },
      text: {
        Primary: "#17323F",
        Secondary: "#455B65",
        Disabled: "#687A82",
        Placeholder: "#A5B2B9",
      },
    },
    fontSize: {
      caption: ["0.75rem", "120%"],
      sm: ["0.875rem", "140%"],
      base: ["1rem", "150%"],
      md: ["1.125rem", "150%"],
      lg: ["1.25rem", "150%"],
      xl: ["1.25rem", "22px"],
      "2xl": ["1.5rem", "26.4px"],
      "3xl": ["2rem", "35.2px"],
      "4xl": ["2.5rem", "44px"],
      "5xl": ["3rem", "52.8px"],
      "6xl": ["3.5rem", "61.6px"],
    },
    fontFamily: {
      body: ["var(--font-roboto)"],
      heading: ["var(--font-poppins)"],
    },
    extend: {
      clipPath: {
        top: "polygon(0% -50%, 100% -50%, 100% 100%, 0% 100%)",
        bottom: "polygon(0% 0%, 100% 0%, 100% 150%, 0% 150%)",
        right: "polygon(0% 0%, 150% 0%, 150% 100%, 0% 100%)",
        left: "polygon(-50% 0%, 100% 0%, 100% 100%, -50% 100%)",
        x: "polygon(-50% 0%, 150% 0%, 150% 100%, -50% 100%)",
        y: "polygon(0% -50%, 100% -50%, 100% 150%, 0% 150%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ['Palatino', '"Palatino Linotype"', '"Book Antiqua"', '"Hoefler Text"', 'Georgia', '"Lucida Bright"', 'Cambria', 'Times', '"Times New Roman"', 'serif'],
        logo: ['"Roboto"', 'Corbel', 'Avenir', '"Lucida Grande"', '"Lucida Sans"', 'sans-serif'],
        secondary: ['Palatino', '"Palatino Linotype"', '"Book Antiqua"', '"Hoefler Text"', 'Georgia', '"Lucida Bright"', 'Cambria', 'Times', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};

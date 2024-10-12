/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        formColor: 'rgb(27, 49, 73)',
        secFormColor: 'rgb(242, 130, 92)',
      },
      height: {
        '1/10': '10%',
      },
    },
  },
  plugins: [],
};

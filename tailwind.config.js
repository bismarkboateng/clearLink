/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'bg-pattern': "url('/src/assets/images/background-pattern.png')"
      },
      boxShadow: {
        'avatar-shadow': '0 7px 20px -4px #10182824'
      }
    },
  },
  plugins: [],
}
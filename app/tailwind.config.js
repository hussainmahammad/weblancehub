/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-charcoal': '#1F2937',
        'accent-blue': '#3B82F6',
        'attention-yellow': '#F59E0B',
        'bg-light-gray': '#F9FAFB',
        'futuristic-blue': '#3498db',
      },
    },
  },
  plugins: [],
}
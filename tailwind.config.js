/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      dropShadow: {
        'white-sm': '1px 0px 1.3px rgba(255, 255, 250, 0.3)',
        'blue-md': '0 0 10px rgba(0, 0, 255, 0.4)'
      }
    }
  },
  plugins: []
}

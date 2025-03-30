export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':  '#16A085', 
        'dark-primary': '#1A1A1A', // Dark Green Background
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill,minmax(200px,1fr))',
      }
    },
  },
  plugins: [],
}

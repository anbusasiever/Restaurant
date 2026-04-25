/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./privacypolicy.html",
    "./blog.html",
    "./blogreadnow.html",
    "./aboutme.html",
    "./healthybaking.html",
    "./recipedetail.html",
    "./Assets/js/script.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff0000',
        'secondary': '#d3d3d3',
        'brand': {
          100: '#f0f9ff',
          900: '#ff4500',
        }
      } 
},
  },
  plugins: [],
}


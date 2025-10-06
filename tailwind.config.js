/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx}",    // Todos los archivos TSX dentro de app
    "./components/**/*.{js,ts,tsx}",  // Tus componentes si existen
    "./index.{js,ts,tsx}"        // Cualquier archivo raíz
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
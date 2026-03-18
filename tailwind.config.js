/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaria: "#B5451B",
        secundaria: "#F4A22D",
        destaque: "#E8380D",
        fundo: "#1A0A00",
        textoClaro: "#FFF5E1",
        acento: "#2D6A27",
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

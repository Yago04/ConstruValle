/** @type {import('tailwindcss').Config} */
export default {
    // Para garantir suporte em todas as subversões do Tailwind v3/v4:
    darkMode: ['class', '.dark', 'selector'], 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
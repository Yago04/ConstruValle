import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 Adicionado o import do React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),          // 👈 Juntou os dois plugins no mesmo lugar
    tailwindcss(),
  ],
  base: '/ConstruValle/', // 👈 Corrigido: apenas o nome do repositório entre barras
})
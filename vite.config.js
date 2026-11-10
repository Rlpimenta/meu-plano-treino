import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ root: 'app', base: '/meu-plano-treino/', plugins: [react()], build: { outDir: '../dist', emptyOutDir: true } })

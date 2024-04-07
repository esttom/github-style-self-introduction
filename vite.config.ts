import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [
    vue(), 
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons(),
      ],
    })
  ],
})

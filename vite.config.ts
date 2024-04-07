import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

// const getSafelist = () => {
//   const carbonIconNames = Object.keys(carbonIcons.icons).map(iconName => `i-${carbonIcons.prefix}-${iconName}`)
//   const mdiIconNames = Object.keys(mdiIcons.icons).map(iconName => `i-${mdiIcons.prefix}-${iconName}`)

//   return [...carbonIconNames, ...mdiIconNames]
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons(),
      ],
      
      // safelist: getSafelist()
    })
  ],
})

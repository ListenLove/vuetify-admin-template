// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
// Utilities
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
// import { fileURLToPath, URL } from 'node:url'
import { convertEnv, getRootPath, getSrcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))
  const srcPath = getSrcPath()
  const rootPath = getRootPath()
  return {
    plugins: [
      Vue({
        template: { transformAssetUrls },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Vuetify(),
      VueRouter({
        dts: 'types/router.d.ts',
      }),
      Components({
        dts: 'types/components.d.ts',
      }),
      ViteFonts({
        google: {
          families: [{
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          }],
        },
      }),
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': srcPath,
        '~': rootPath,
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: +viteEnv.VITE_PORT,
      host: true,
    },
  }
})

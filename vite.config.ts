import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

const pathResolve = (pathStr: string) => {
  return resolve(__dirname, pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    dts(),
    Components({
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.jsx$/]
    })
  ],
  resolve: {
    alias: {
      '#': pathResolve('./types'),
      '@': pathResolve('./src'),
      '@views': pathResolve('./src/views'),
      '@components': pathResolve('./src/components')
    }
  },
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://API网关所在域名',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./src/style/global.scss";'
      }
    }
  },
  build: {
    lib: {
      entry: pathResolve('./src/main.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib'
    }
  }
})

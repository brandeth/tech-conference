// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const vueStyleBlockPattern = /[?&]vue&type=style(?:&|$)/

const viteVueStyleBlockCacheGuard = () => ({
  name: 'vite-vue-style-block-cache-guard',
  apply: 'serve' as const,
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (!req.url || !vueStyleBlockPattern.test(req.url)) {
        next()
        return
      }

      const writeHead = res.writeHead

      res.writeHead = function writeHeadWithAcceptVary(...args: Parameters<typeof writeHead>) {
        const vary = res.getHeader('Vary')
        const varyValues = Array.isArray(vary) ? vary.join(', ') : String(vary ?? '')

        if (!varyValues.toLowerCase().split(',').map(value => value.trim()).includes('accept')) {
          res.setHeader('Vary', varyValues ? `${varyValues}, Accept` : 'Accept')
        }

        res.setHeader('Cache-Control', 'no-store')

        return writeHead.apply(this, args)
      }

      next()
    })
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      strictPort: true,
    },
    plugins: [
      viteVueStyleBlockCacheGuard(),
      tailwindcss()
    ]
  }
})

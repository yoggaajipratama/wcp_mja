export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
    serveStatic: true
  },
  css: ['~/assets/css/styles.css', '~/assets/css/bootstrap.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', defer: true }
      ]
    }
  },
  plugins: ['~/plugins/cookies.js'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      token: process.env.TOKEN,
    },
    secretKey: process.env.SECRET_KEY
  },
  devServer:{
    host: '0.0.0.0',
    port: 3000
  }
})

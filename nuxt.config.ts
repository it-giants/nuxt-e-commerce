// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - mystore', // %s will be replaced with the title set in each page
      meta: [
        { name: 'description', content: 'Welcome to Your Store' }
      ]
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3005
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      'IBM Plex Sans': [400, 700]
    },
    display: 'swap'
  }
})
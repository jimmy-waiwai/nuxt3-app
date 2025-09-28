// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr:true,
  modules: ['@nuxtjs/tailwindcss'],
  //assets内の有効化したcssファイルは、全ページで有効化
  css: ['~/assets/css/style.css'],
  plugins: ['~/plugins/fontawesome.js'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      // link: [{ rel: 'icon', href: '/icon.png' }],
    },
    baseURL: '/nuxt3-app/',
  },

  generate: {
    dir: 'docs'
  },

  

});
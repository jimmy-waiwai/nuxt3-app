// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  //css: ['/assets/css/style.css'],
  plugins: ['~/plugins/fontawesome.js'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      // link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },

  modules: ['@nuxtjs/tailwindcss'],

  ssr:false,
});
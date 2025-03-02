// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  typescript: {
    shim: false,
  },
  ssr: false,
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css", "@mdi/font/css/materialdesignicons.css"],
  build: {
      transpile: ["vuetify"],
  },
  vite: {
      define: {
          "process.env.DEBUG": false,
      },
  },
  //追加
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  devtools: { enabled: true }
})

import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['vuetify/styles'],
  vite: {
    ssr: {
        noExternal: ['vuetify'], 
    },
},
modules: [
  async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
          vuetify()
      ))
  }
]
})

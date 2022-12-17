export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Neas Fashion - Buy the best clothes, shoes, bags and perfume right from the comfort of your phone.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The fastest way to order clothing and accessories anywhere within Lagos' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: "neasfashion"},
      { hid: 'og:title', property: 'og:title', content: 'Neas Fashion - Buy the best clothes, shoes, bags, perfume and more right from the comfort of your phone.'},
      { hid: 'og:description', property: 'og:description', content: 'The fastest way to order clothing and accessories anywhere within Lagos'},
      { hid: 'og:image', property: 'og:image', content: ''},
      { hid: 'og:url', property: 'og:url', content: 'https://neasfashion.demo.joshytheprogrammer.com/'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Neas Fashion - Buy the best clothes, shoes, bags, perfume and more right from the comfort of your phone.'},
      { hid: 'twitter:description', name: "twitter:description", content: "The fastest way to order clothing and accessories anywhere within Lagos"},
      { hid: 'twitter:image', name:"twitter:image", content:""},
      { hid: 'twitter:url', property: "twitter:url", content: "https://neasfashion.demo.joshytheprogrammer.com/"},
      { hid: "twitter:card", name: "twitter:card", content: "summary"},
      { name:"twitter:creator", content:"@joshytheprog"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // '@nuxtjs/ngrok',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyC__Vsco_IudvJa1vHV1ACWWgWziOXykLU',
      authDomain: 'neas-fashion.firebaseapp.com',
      projectId: 'neas-fashion',
      storageBucket: 'neas-fashion.appspot.com',
      messagingSenderId: '122770813563',
      appId: '1:122770813563:web:24ba8fb9acabeec1b628de',
      measurementId: 'G-VRCW6DPK4W'
    },
    services: {
      auth: false,
      firestore: true,
      functions: false,
      storage: false,
      database: false,
      messaging: false,
      performance: false,
      analytics: false,
      remoteConfig: false
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
      '@/assets/scss/app.scss',
      '@/assets/scss/mixins.scss'
    ],
    hoistUseStatements:  true,
  },

  ngrok: {
    // module options
    authtoken: process.env.NGROK_AUTHTOKEN
  }
}

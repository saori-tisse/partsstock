require('dotenv').config();
const axios = require("axios");
const { API_KEY, API_URL } = process.env;

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/all.min.css' }
    ],
    script: [
      {
        'data-ad-client': "ca-pub-6385292737893565", src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/prism',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    ['@nuxtjs/google-analytics', {
      id: 'ca-pub-6385292737893565',
      analyticsUacct: 'UA-121786791-5',
      analyticsDomainName: 'parts-stock.site'
    }
    ]
  ],


  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /**
   * env
   */
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    injected: true,
    html: true,
  },
  /**
   * Style Resource
   */
  styleResources: {
    scss: [
      '~/assets/sass/foundation/variable/_index.scss',
      '~/assets/sass/foundation/mixin/_index.scss',
      '~/assets/sass/foundation/base/_reset.scss',
      '~/assets/sass/component/_flex.scss',
      '~/assets/sass/utility/_utility.scss',
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /**
  * Generate
  */
  generate: {
    routes() {
      let parts = axios
        .get(process.env.API_URL + 'parts/', {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(part => {
            return '/parts/' + part.id;
          });
        });
      let posts = axios
        .get(process.env.API_URL + 'category/', {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(post => {
            return '/category/' + post.slug;
          });
        });
      return Promise.all([parts, posts]).then(values => {
        return values.join().split(",");
      })
    }
  },
}

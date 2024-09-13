// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-10',
  devtools: { enabled: true },
  mode: "universal",

  devServer: {
    port: 8000,
    url: "http://website:8000",
    // https: {
    //   key: './server.key',
    //   cert: './server.crt'
    // }
  },

  // 
  app: {
    baseURL: '/',
    /*
     ** Headers of the page
     */
    head: {
      // Title
      title: 'Sistem Informasi Pelayanan Buku Tamu',
      // Konfigurasi lainnya
      // Meta
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
        { hid: "description", name: "description", content: process.env.npm_package_description || "", },
      ],
      // Link
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        // Optional: Add other icon formats if you have them
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: "/assets/img/favicon/favicon-32x32.png" },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: "/assets/img/favicon/favicon-16x16.png" },
        // { rel: 'icon', type: 'image/x-icon', href: require('~/assets/img/favicon/favicon.ico')  },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('~/assets/img/favicon/favicon-32x32.png') },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('~/assets/img/favicon/favicon-16x16.png') },
  
        // Bootstrap
        { 
          rel: "stylesheet", 
          href: 
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous" 
        },

        // Font Awesome
        { 
          rel: "stylesheet", 
          href: 
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
          integrity: "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
      ],
      // Script
      script: [
        { 
          src: 
          'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js', 
          tagPosition: 'bodyClose',
          body: true,
          defer: true,
          integrity:"sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
          crossorigin:"anonymous"
        },
        { 
          src:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
          tagPosition: 'bodyClose',
          body: true,
          defer: true,
          integrity:"sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy", 
          crossorigin:"anonymous"
        },
        { 
          src:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose',
          body: true,
          defer: true,
          integrity:"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz", 
          crossorigin:"anonymous",
        }
      ],
    },
  },

  /*
   ** Customize the progress-bar color
   */
  //  loading: { color: "#fff" },
  
  /*
    ** Customize CSS
  */
  css: [
    // 'bootstrap/dist/css/bootstrap.min.css',
    // '@/assets/main.css'
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  build: {
    transpile: ['bootstrap']
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/bootstrap.js'
  ],
  
  

  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: [],


  // modules: [
  //   // 'usebootstrap',
  //   // '@nuxtjs/fontawesome',
  //   '@nuxtjs/tailwindcss',
  //   '@nuxtjs/color-mode'
  // ],

  // fontawesome: {
  //   // Icons you want to use. For example, using solid and regular styles.
  //   icons: {
  //     solid: true,
  //     regular: true,
  //     brands: true
  //   }
  // },

  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ],

  // Route
  // router: {
  //   linkExactActiveClass: "active",
  // },
  routes: [
    {
      // Login
      path: "/",
      component: "pages/index.vue"
    },
    // Admin
    {
      path: "/dashboard",
      component: "pages/dashboard/dashboard.vue"
    },
    {
      path: "/posts/:id",
      component: "pages/posts/[id].vue"
    }
  ],

  
})
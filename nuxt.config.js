export default {

    target: 'server',


    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'my-first-project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
                integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
                crossorigin: "anonymous"
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
                integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
                crossorigin: "anonymous"
            },
        ],
        script: [{
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
            integrity: "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",
            crossorigin: "anonymous"
        }]
    },

    css: [
        '~/assets/css/app.css',
    ],

    loading: {
        color: '#2F329F'
    },

    // axios: {
    //     baseURL: ''
    // },

    // router: {
    //     middleware: ['redirectToRoute']
    // },


    serverMiddleware: [
        '~/server/index',
        '~/middleware/redirectToRoute'
    ],


    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    // plugins: [
    //     '~/plugins/vuetify.ts'
    // ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/axios',
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {

    }
}
const path = require('path') // eslint-disable-line
const rsmdcCompilerModule = require('@rsmdc/nuxt').rsmdcCompilerModule

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [
    '@/node_modules/rsmdc/material-components-web',
    '@/assets/scss/app.scss'
  ],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@rsmdc/nuxt', '@nuxtjs/axios'],
  build: {
    extend(config, ctx) {},
    hardSource: process.env.NODE_ENV === 'development',
    transpile: ['@rsmdc'],
    loaders: {
      scss: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'node_modules')
          ]
        }
      },
      vue: {
        compilerOptions: {
          modules: [rsmdcCompilerModule]
        }
      }
    },
    babel: {
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-runtime'
      ],
      sourceType: 'unambiguous' // to fix module.exports problem
    }
  }
}

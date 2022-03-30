const path = require('path')

const htmlConfig = require('./webpack/html.config')
const jsConfig = require('./webpack/js.config')
const sassConfig = require('./webpack/sass.config')
const imagesConfig = require('./webpack/images.config')

module.exports = {

  module: {
    rules: [
      htmlConfig.rule,
      jsConfig.rule,
      sassConfig.rule,
      imagesConfig.rule,
    ],
  },

  plugins: [
    htmlConfig.plugin,
    sassConfig.plugin,
  ],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
    },
    extensions: ['.js', '.jsx'],
  },

  stats: 'errors-only',
}
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {

  rule: {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
        options: {
          minimize: true
        },
      },
    ],
  },

  plugin: new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
}
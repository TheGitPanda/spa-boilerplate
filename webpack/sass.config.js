const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  rule: {
    test: /\.scss$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
        },
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            mode: 'local',
            localIdentName: '[local]--[hash:base64:7]',
          },
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          postcssOptions: {
            plugins: [
              [
                'autoprefixer',
                {
                  // Options
                },
              ],
            ],
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/common/scss/index.scss'),
        },
      },
    ],
  },

  plugin: new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
}
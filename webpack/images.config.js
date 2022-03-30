module.exports = {

  rule: {
    test: /\.(jpg|png|gif|svg)$/,
    use: [
      {
        loader: 'image-webpack-loader',
        options: {

          mozjpeg: {
            progressive: true,
          },

          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },

          pngquant: {
            quality: [0.65, 0.90],
            speed: 4,
          },

          gifsicle: {
            interlaced: false,
          },

          svgo: {
            plugins: [
              'preset-default',
            ],
          },

          // the webp option will enable WEBP
          webp: {
            quality: 75,
          },
        },
      },
    ],
  },
}
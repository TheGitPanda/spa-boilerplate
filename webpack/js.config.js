
module.exports = {

  rule: {
    test: /\.(js|jsx)$/, // Transpile `.js` and `.jsx` files
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
}
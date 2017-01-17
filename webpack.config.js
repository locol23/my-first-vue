module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: './dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/, loader: 'vue'
      }
    ]
  },
  devtool: 'source-map'
};

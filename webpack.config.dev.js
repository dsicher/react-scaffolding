var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: [
      'node_modules',
    ],
    root: [
      path.resolve('./src/'),
      path.resolve('./src/js/'),
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'url-loader' },
      { test: /\.png$|\.jpg$|\.jpeg$/, loader: 'url-loader' },
      { test: /\.gif$/, loader: 'file-loader' },
      { test: /\.mp4$|\.mov$/, loader: 'file-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style?cacheDirectory=true', 'css?-url', 'resolve-url', 'sass?cacheDirectory=true', 'postcss-loader?cacheDirectory=true'] },
      { test:  /\.json$/, loader: 'json-loader' }
    ]
  },
  postcss: function() {
    return [autoprefixer]
  },
  sassLoader: {
    includePaths: ['./src/styles']
  }
};

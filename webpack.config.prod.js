var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: [
      'node_modules'
    ],
    root: [
      path.resolve('./src/'),
      path.resolve('./src/js/'),
    ],
  },
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file-loader' },
      { test: /\.png$|\.jpg$|\.jpeg$/, loader: 'file-loader' },
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

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: APP_DIR,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
      },
      {
        test: /\.jsx$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
      }
    ]
  }
};

module.exports = config;

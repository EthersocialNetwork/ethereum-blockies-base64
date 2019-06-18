const path = require('path');

const rootDir = path.resolve(__dirname);

module.exports = {
  mode: 'production',
  entry: path.resolve(rootDir, 'src/main.js'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'main.js',
    library: {
      root: 'ethereum-blockies-base64'
    },
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};

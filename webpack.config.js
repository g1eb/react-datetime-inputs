var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    'datetime-inputs': './src/index.js',
    'datetime-inputs.min': './src/index.js',
  },

  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'moment': {
      root: 'moment',
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment',
      umd: 'moment',
    },
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'DatetimeInputs',
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false,
      },
    })
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react'],
          },
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },

};

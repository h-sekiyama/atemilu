var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

var dest = './public/';
var src = './app/lib/';
var relativeSrcPath = path.relative('.', src);

module.exports = {

  dest: dest,
  entry: src + '/javascripts/entry.jsx',
  output: {
    filename: dest + '/javascripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // <- without es6 polyfills
        // loader: 'babel-loader?optional=runtime' // <- contain es6 polyfills
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),  // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
    new webpack.optimize.AggressiveMergingPlugin(),　//ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
    new WebpackNotifierPlugin({alwaysNotify: true}),  //コンパイルが完了したら通知
  ],
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
 // source-mapを出力
  devtool: "#source-map",

  postcss: [
    require('autoprefixer'),
    require('postcss-nested'),
    require("postcss-simple-vars")({
      variables: function() {
        return require(src + "/stylesheets/setting")
      }
    }),
    require('postcss-mixins')({
      mixins: require(src + "/stylesheets/mixin")
    }),
    require('cssnano')
  ]
};

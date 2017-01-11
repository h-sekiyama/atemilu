var path = require('path');

var dest = './public/';
var src = './app/lib/';
var relativeSrcPath = path.relative('.', src);

module.exports = {

  dest: dest,

  js: {
    src: src + '/javascripts/**',
    dest: dest + '/javascripts',
    uglify: false
  },

  webpack: {
    entry: src + '/javascripts/entry.jsx',
    output: {
      filename: 'bundle.js'
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
    resolve: {
      extensions: ['', '.jsx', '.js']
    },
   // source-mapを出力
    devtool: "#source-map"
  },

  postcss: [
    require('autoprefixer'),
    require("postcss-simple-vars")({
      variables: function() {
        return require("../app/lib/stylesheets/setting")
      }
    }),
    require('postcss-nested'),
    require('postcss-mixins')({
      mixins: require("../app/lib/stylesheets/mixin")
    })
  ],

  watch: {
    js: relativeSrcPath + '/javascripts/**',
    css: relativeSrcPath + '/stylesheets/**'
  },

  webserver: {
    host: 'localhost',
    port: 5000,
    livereload: true,
    fallback: dest,
    open: 'http://localhost:5000'
  }
};

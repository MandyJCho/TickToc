const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  modules: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, '/node_modules/'),
        ],
        use: [
            'eslint-loader',
            'babel-loader'
        ],
        options: {
          presets: ['react', 'es2016']
        }
      },
      {
        test: /\.scss$/,
        include: [
            path.resolve(__dirname, 'app', 'styles')
        ],
        use : ExtractTextPlugin.extract({
         use: ['css-loader', 'sass-loader'],
         fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devtool: 'source-map',
  target: 'web',
  externals: ['react'],
  plugins: [
      new HTMLPlugin({
        template: path.join(__dirname, '/app/index.js'),
        filename: 'index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin({
        filename: '[name].css'
      })
  ]
};

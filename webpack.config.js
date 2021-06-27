const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   mode: 'development',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      clean: true,
   },
   devServer: {
      inline: true,
      port: 8001
   },
   resolve: {
      extensions: [".js"],
    },
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-react']
            }
         }
      ]
   }
}
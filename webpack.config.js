const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/ts/index.ts'),
    settings: path.resolve(__dirname, './src/ts/settings.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/settings.html'),
      filename: 'settings.html',
      chunks: ['settings'],
    }),
    new ESLintPlugin({
      files: ['src/ts/**/*.ts'],
      fix: true,
    }),
  ],
}

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}

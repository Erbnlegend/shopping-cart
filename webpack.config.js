const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const ENV = argv.mode || 'development'
  return {
    entry: {
      bundle: './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, ENV === 'development' ? 'dist' : 'dist/projects/shoppingCart'),
      publicPath: '/'
    },
    mode: ENV,
    devtool: ENV === 'production' ? undefined : 'inline-source-map',
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      },
      modules: ['node_modules'],
      extensions: ['.js', '.json']
    },
    optimization: {
      minimize: ENV === 'production',
      runtimeChunk: 'single'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          use: ['babel-loader']
        },
        {
          test: /.(p?css|postcss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: ''
              }
            },
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'imgs/[name][ext]'
          }
        },
        {
          test: /.(html)$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
            outputPath: './'
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: ENV
      })
    ]
  }
}

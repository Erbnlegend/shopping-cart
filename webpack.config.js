const path = require('path')

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
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
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
  }
}

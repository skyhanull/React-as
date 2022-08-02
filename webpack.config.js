module.exports = {
    name: 'WordRelay-setting',
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
      extensions: ['.jsx', '.js'],
    },
  
    entry: {
      app: './client',
    },
   
    output: {
      filename: 'app.js',
      path: path.join(__dirname, 'dist'),
    },


      devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
}
  };
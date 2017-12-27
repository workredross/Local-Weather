var webpack = require('webpack');
  module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      './public/app.js'
    ],
    externals:{
      jquery:'jQuery'
    },
    plugins:[
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      root:__dirname,
      alias: {
        LatLong: 'public/components/Lat&Long.jsx',
        DisplayTemp:'public/components/DisplayTemp.jsx',
        OpenWeatherAPI: 'public/API/OpenWeatherAPI.jsx',
        DemoStyle: 'public/styles/demo.css'
      },
      extension: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      }
    ]

  }
};

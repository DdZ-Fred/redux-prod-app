const loaders = [
  'babel?presets[]=react,presets[]=es2015,presets[]=stage-1',
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: process.env.NODE_ENV === 'production' ?
          loaders :
          ['react-hot', ...loaders],
      },
    ],
  },
};

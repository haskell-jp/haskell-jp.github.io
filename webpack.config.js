const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('Starting webpack process...');

// Determine build env by npm command options
const TARGET_ENV = process.env.npm_lifecycle_event === 'build' ? 'production' : 'development';
const ENV = {
  'port': process.env.PORT || 8080,
  'host': process.env.HOST || 'localhost',
  'url': process.env.URL || 'https://haskell.jp',
  'title': process.env.TITLE || '日本Haskellユーザーグループ',
  'description': process.env.DESCRIPTION || `
日本Haskellユーザーグループは、プログラミング言語Haskellの普及活動と、Haskellユーザーのサポートを行う組織です。  
  `,
};

// Common webpack config
const commonConfig = {

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
  },

  entry: {
    index: [
      path.join( __dirname, 'src/index.js' )
    ],
  },

  resolve: {
    extensions: ['.js', '.elm'],
    modules: [
      'node_modules'
    ],
  },

  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: 'url-loader'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: 'src/pug/index.pug',
      inject:   'body',
      filename: 'index.html',
      data: ENV,
      hash: true,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
      },
    }),

    // Inject variables to JS file.
    new webpack.DefinePlugin({
      'process.env':
        Object.keys(ENV).reduce((o, k) =>
          merge(o, {
            [k]: JSON.stringify(ENV[k]),
          }), {}
        ),
    }),
  ],

}

// Settings for `npm start`
if (TARGET_ENV === 'development') {
  console.log('Serving locally...');

  module.exports = merge(commonConfig, {

    devServer: {
      contentBase: 'src',
      inline: true,
      port: ENV.port,
      host: ENV.host,
    },

    module: {
      rules: [
        {
          test:    /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: [
            {
              loader: 'elm-hot-loader',
            },
            {
              loader: 'elm-webpack-loader',
              options: {
                verbose: true,
                warn: true,
              }
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ]
        },
      ]
    }
  });
}

// Settings for `npm run build`.
if (TARGET_ENV === 'production') {
  console.log('Building for prod...');

  module.exports = merge(commonConfig, {

    module: {
      rules: [
        {
          test:    /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use:  'elm-webpack-loader',
        },
        {
          test: /\.(css|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'sass-loader',
              'postcss-loader',
            ]
          }),
        },
      ]
    },

    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/img/logo.svg',
          to: 'img/'
        },
        {
          from: 'src/img/favicon.ico',
        },
        {
          from: 'src/CNAME',
        },
      ]),

      // Extract CSS into a separate file
      new ExtractTextPlugin({ filename: './[hash].css', allChunks: true }),

      // Minify & mangle JS/CSS
      new webpack.optimize.UglifyJsPlugin({
          minimize:   true,
          compressor: { warnings: false }
          // mangle:  true
      }),
    ]
  });
}

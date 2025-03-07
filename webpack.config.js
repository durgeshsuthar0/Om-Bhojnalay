module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',   // Inject CSS into the DOM
            'css-loader',     // Turns CSS into commonjs
            'sass-loader'     // Compiles Sass to CSS
          ],
        },
        // other rules...
      ],
    },
  };
  
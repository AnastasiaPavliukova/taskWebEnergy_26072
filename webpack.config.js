const path = require('path');

module.exports = {
  entry: './dist/js/main.mjs',
  output: {
    filename: 'main.min.mjs',
    path: path.resolve(__dirname, 'dist'),
  },
};
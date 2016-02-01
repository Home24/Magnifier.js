var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve('src', 'magnifier.js'),

    output: {
        library: 'Magnifier',
        libraryTarget: 'umd',
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

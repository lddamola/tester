var webpack = require('webpack');

module.exports = {
    context: `${__dirname}/client`,
    entry: {
        index: `./index.js`,
        vendor: [`angular`, `angular-marked`, 'q']
    },
    devtool: "#inline-source-map",
    output: {
        path: __dirname + '/client/js',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /node_modules/
        }]
    }
};

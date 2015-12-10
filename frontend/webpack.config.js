var webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        publicPath: 'build/',
        filename: 'build.js'
    },
    watch:true,
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ]
    }
};
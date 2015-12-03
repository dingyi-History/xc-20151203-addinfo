var vue = require('vue-loader');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'build.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ],
        babel: {
            presets: ['es2015', 'stage-0'],
            plugins: ['transform-runtime']
        }
    }
}
;
if (process.env.NODE_ENV === 'production'
) {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}
else {
    module.exports.devtool = '#source-map'
}


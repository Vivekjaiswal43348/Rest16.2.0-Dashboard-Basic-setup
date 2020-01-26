const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './../dist'),
        publicPath: 'http://localhost:9090/',
        filename: './index_bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        https: false,
        noInfo: false,
        port: 9090,
        host: 'localhost',
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                ,
                options: {
                    presets: ['react']
                  }
                }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
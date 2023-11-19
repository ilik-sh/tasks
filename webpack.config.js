const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader'],
                test: /\.tsx?$/, use: 'ts-loader',
                test: /\.ts?$/, use: 'ts-loader',
                exclude: /node.modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development'
}

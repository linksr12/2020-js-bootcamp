const path = require('path')//Path is use for create new versions readables to production
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')//We reconize html templates

module.exports = {//We start webpack modules
    entry: {//File origin in this case is index.js the entry point
        app: './src/index.js',//Especify the route and dthe app
    },
    output: {//This is te output files
        path: path.resolve(__dirname, 'dist'),//Path creates file in dist directory
        filename: 'js/[name].[contenthash].bundle.js'//This creates output js files unified with a name and diferent hashes.
    },
    plugins: [//This is an array to run every plugin.
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new HtmlWebpackPlugin({ 
            template: './src/dashboard.html', filename: 'dashboard.html' })
            
    ],
    module: {//We read sass files to get output .js adding sass code.
        rules: [
            {
                test: /\.s[ac]ss$/,//All file with extension scss and sass are readed
                use: [//We start to use the files
                    'style-loader',//The third step generate the styles archives in output .js
                    'css-loader',//We secondly convert into css
                    'sass-loader',//Firts read the sass archives
                ]
            },
        ]
    }
}
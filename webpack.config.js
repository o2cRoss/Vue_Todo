//  webpack 最基本配置

//导入 path模块
const path = require('path');

//引入 vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

//引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //打包环境配置 development 开发环境 或者 production 生产环境
    mode: 'development',
    //打包入口
    entry: './src/main.js',
    //devserver配置
    devServer: {
        //指定服务器根目录
        contentBase: './dist',
        //自动打开浏览器
        open: true
    },  
    //打包的出口
    output: {
        filename: 'o2cRoss.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 配置打包规则
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader', //file-loader
            options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                limit: 2048
            }
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.styl(us)?$/,
            use:['style-loader' ,
            'css-loader',
            'postcss-loader',
            'stylus-loader'
            ]
        }
    ]
    },
    //插件 配置
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};
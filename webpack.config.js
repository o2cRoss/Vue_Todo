//  webpack 最基本配置

//导入 path模块
const path = require('path');

//引入 vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    //打包环境配置 development 开发环境 或者 production 生产环境
    mode: 'development',
    //打包入口
    entry: './src/main.js',
    //打包的出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 配置打包规则
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    //插件 配置
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};
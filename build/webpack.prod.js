//  prod 配置
const baseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');

const prodConfig = {
    //打包环境配置 development 开发环境 或者 production 生产环境
    mode: 'production'
};

module.exports = merge(baseConfig, prodConfig);
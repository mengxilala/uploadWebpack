const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    // 入口文件名称
    entry: './index.js',
    // 输出文件名称
    output: {
        filename: 'bundle.js'
    },
    // 这里是我们新添加的处理不同类型文件需要的 Loader 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    devServer: {
        compress: true, // 让 dev－server 启动 gzip压缩
        hot: true, // 让 dev－server 启动 HMR 功能
    },
    // 开启 source map
    devtool: 'inline-source-map',
    
    // 添加 plugin 的配置选项
    // 用了第三方的 plugin 以后，再添加一个内置的 plugin：webpack.optimize.UglifyJsPlugin()，
    // 这个可以帮助我们用 uglifyJs 来压缩生成的 js 代码。
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlwebpackPlugin({
            title: 'Test App'
        }),
        // 新添加的内置的 plugin！
        new webpack.HotModuleReplacementPlugin(),
    ]
}
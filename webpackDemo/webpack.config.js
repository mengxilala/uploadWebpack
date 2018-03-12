var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
     //添加我们的插件 会自动生成一个html文件
     plugins:[
         new HtmlwebpackPlugin({
             title:'Hello World app'
         })
     ],
     devServer:{
         historyApiFallback:true,
         hot:true,
         inline:true,
         progress:true
     },
     module:{
         loaders:[
             {
                 test:/\.css$/, //添加CSS样式
                 loaders:['style-loader','css-loader'],  //loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader.
                 include:APP_PATH
             },
             {
                test:/\.scss$/, //添加css预编译程序
                loaders:['style-loader','css-loader','sass-loader'],
                include:APP_PATH
            },
            {
                test:/\.(png|jpg)$/, //处理图片和其他静态文件
                loaders:'url-loader?limit=40000' //limit的参数，当图片大小小于这个限制的时候，会自动启用base64编码图片。
            },
            {
                test:/\.jsx?$/, //添加ES6的支持
                loaders:'babel-loader',
                include:APP_PATH,
                query:{
                    presets:['es2015'] //es2015这个参数是babel的plugin，可以支持各种最新的es6的特性
                }
            },
         ]
     },
}

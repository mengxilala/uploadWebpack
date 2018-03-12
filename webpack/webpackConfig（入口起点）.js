// 1.单个入口（简写）写法
const config = {
    entry: './path/to/my/entry/file.js'
};
module.exports = config;

// entry 属性的单个入口语法，是下面的简写：

const config = {
    entry: {
        main: './path/to/my/entry/file.js'
    }
};
module.exports = config;


// 2.对象语法
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};

// 3.多页面应用程序
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
// loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。
// 因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。
// loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，
// 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！


// 示例
// 例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader：

// npm install --save-dev css-loader
// npm install --save-dev ts-loader
// 然后指示 webpack 对每个 .css 使用 css-loader，以及对所有 .ts 文件使用 ts-loader：

wmodule.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //项目入口
    entry: "./src/index.ts",
    //输出设置
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    //调试工具
    devtool: "source-map",
    //模块加载器设置
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.(fbx|obj|amf|glb)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/assets/[name].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
    //调试服务
    devServer: {
        // inline: false,
        hot: true,
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: '10088'
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "g2"
            }),
    ],
    resolve: {
        extensions: [ '*', '.ts', '.js']
    }
}
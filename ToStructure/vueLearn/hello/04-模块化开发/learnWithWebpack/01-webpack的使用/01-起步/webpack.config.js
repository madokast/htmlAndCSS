const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  //入口js文件
  entry: './src/main.js',
  //出口js文件
  output: {
    //路径 必须是绝对路径
    //利用resolve解析绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //打包后url地址前缀
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        //一下是为了解析CSS文件，首先要安装
        //  "CSS文件处理": "npm install css-loader --save-dev",
        //  "CSS文件处理1": "npm install style-loader --save-dev"
        //这是个正则表达式，$结尾，匹配所有的CSS文件
        test: /\.css$/,
        //css-loader只负责加载，不负责解析
        //style-loader负责解析（js中解析这个css样式）
        //这个数组先后顺序有意义
        use: ['style-loader', 'css-loader']
      },
      {
        //处理less文件，一种可以定义符号的样式文件
        test: /\.less$/,
        use: [{
          loader: "style-loader",//create style nodes form
        }, {
          loader: "css-loader",//translates css into commonJs
        }, {
          loader: "less-loader"//compiles less to css
        }]
      },
      {
      //处理图片
        test: /\.(png|jpg|jpeg|gif)$/,
        use:[{
          loader:'url-loader',
          options:{
            //小于8192B的图片，二进制加入到js文件重
            limit:8192,
            //图片名字生成方式
            name:'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use:{
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugin:{
    // new HtmlWebPackPlugin()
  }
  // resolve:{
  //   extensions:['.js','.css','.vue'],
  //   // alias:{
  //   //   'vue$':'vue/dist/vue.esm.js'
  //   // }
  // }

  //86

};
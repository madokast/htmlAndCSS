//程序入口
//或者称为index.js

console.log('main.js the entrance');
console.log('aaaaa');

import {NAME} from "./js/info";

console.log(NAME);

import {add,mul} from "./js/mathUtils";

console.log(add(1, 20));
console.log(mul(10, 30));

//依赖CSS
require('./css/normal.css');

//依赖less
require('./css/special.less');

// require('./js/vueLearn');

// import Vue from "vue";
// import App from "./vue/App.vue";
// new Vue({
//   el:'#app',
//   template:'<App/>',
//   components:{
//     App
//   }
// });

//O:\Documents\GitHub\htmlAndCSS\ToStructure\vueLearn\hello\04-模块化开发
// \learnWithWebpack\01-webpack的使用\01-起步>webpack ./src/main.js
// ./dist/bundle.js
// Hash: 5b9f0768f266be0d667e
// Version: webpack 3.6.0
// Time: 60ms
//     Asset     Size  Chunks             Chunk Names
// bundle.js  3.04 kB       0  [emitted]  main
//    [0] ./src/main.js 155 bytes {0} [built]
//    [1] ./src/info.js 26 bytes {0} [built]

//单页面富应用
//前端路由
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

import store from "./store";
import {request} from "./network/request";

request({url:'http://123.207.32.32:8000/home/multidata'})
  .then(res=>{
    console.log(res);})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  request
});

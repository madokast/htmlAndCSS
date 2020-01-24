import Vue from 'vue'
import App from './App'
import router from "./router";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

//不要在这里使用CSS
// require('./assets/css/base.css');

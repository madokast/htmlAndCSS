import Vue from "vue";
import Vuex from "vuex"

//安装插件
Vue.use(Vuex);

//创建对象
const store = new Vuex.Store({
  state:{
    counter:100
  },
  mutations:{
    //定义方法
    counter_increment(state){
      state.counter++;
    },
    counter_decrement(state){
      state.counter--;
    },
    counter_incrementBy(state,num){
      state.counter+=num;
    }
  },
  actions:{
    counter_increment_async_actions(context){
      setTimeout(()=>{
        return context.commit('counter_increment');
      },1000);
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter;
    },
    showSelf(){
      return function (obj) {
        return obj;
      }
    }
  },
  modules:{
    aModules:{
      state:{},
      mutations:{},
      actions:{},
      getters:{}
    },
    bModules:{
      state:{},
      mutations:{},
      actions:{},
      getters:{}
    }
  }
});

//导出
export default store;

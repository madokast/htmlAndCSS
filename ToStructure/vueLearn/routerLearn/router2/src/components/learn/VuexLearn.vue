<template>
  <div>
    <h2>2258 2336</h2>
    <h2>0004 0148</h2>
    <p>{{message}}</p>
    <p>状态管理模式。状态管理工具。全局变量？</p>
    <p>Vuex=>{count:0} 单例对象 而且是响应式的</p>
    <hr>
    <p>一般需要共享什么变量呢？</p>
    <p>用户登录状态、用户名称、头像、token、地理位置</p>
    <hr>


    <NeedCounter></NeedCounter>
    <button @click="add">+</button>
    <button @click="addAsync">+a</button>
    <button @click="addBy(5)">+5</button>
    <button @click="sub">-</button>

    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.showSelf('xxxx')}}</h2>
  </div>
</template>

<script>
  // function writeln(info) {
  //   document.writeln(info);
  // }


  import NeedCounter from '../learn/NeedCounter';

  export default {
    name: "VuexLearn",
    data(){
      return{
        message:'开始学习Vuex',
        counter:0
      }
    },
    components:{
      NeedCounter
    },
    methods:{
      add(){
        this.$store.commit('counter_increment');
      },
      sub(){
        this.$store.commit('counter_decrement');
      },
      addBy(num){
        this.$store.commit('counter_incrementBy',num);
      },
      addAsync(){
        this.$store.dispatch('counter_increment_async_actions');
      }
    }
  }
</script>

<style scoped>

</style>

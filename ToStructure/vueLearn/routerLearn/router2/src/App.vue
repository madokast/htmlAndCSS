<template>
  <div id="app">
    <router-link to="/promise">promise</router-link>
    <router-link to="/PromisLearn02">PromisLearn02</router-link>
    <router-link to="/VuexLearn">VuexLearn</router-link>
    <router-link to="/NetComponent">NetComponent</router-link>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import router from "./router";
import PromiseLearn from './components/learn/PromiseLearn'

export default {
  name: 'App',
  router,
  data(){
    return{
      message:'promiseLearn'
    };
  },
  components: {
    HelloWorld,
    PromiseLearn
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

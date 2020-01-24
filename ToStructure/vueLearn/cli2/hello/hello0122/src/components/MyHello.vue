<template>
  <div>
    <h2>我的vue组件</h2>
    <p>{{message}}</p>
    <ul>
      <li :key="e" v-for="e in movies">{{e}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyHello',
  data () {
    return {
      message: 'hello vue!',
      movies: ['aa', 'bb', 'cc']
    }
  }
}
</script>

<style scoped>
  .div {
    background-color: aqua;
  }
</style>

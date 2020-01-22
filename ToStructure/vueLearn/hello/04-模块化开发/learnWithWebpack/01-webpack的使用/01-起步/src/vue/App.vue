<template>
  <div>
    <h2 class="title">{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        message: 'hello webpack'
      };
    },
    methods: {}
  }
</script>

<style scoped>
  .title{
    color: blue;
  }
</style>
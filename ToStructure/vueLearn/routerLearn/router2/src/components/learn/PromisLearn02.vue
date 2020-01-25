<template>
  <div>
    <h2>2231 2257</h2>
    <p>两个网络请求，同步关系的实现</p>
  </div>
</template>

<script>
  Promise.all([
    new Promise(resolve => resolve('两个网络请求')),
    new Promise(resolve => resolve('同步关系的实现'))
  ]).then(results=>document.writeln(results.toString()));

  export default {
    name: "PromisLearn02"
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <h2>我是新的用户界面profile</h2>
    <p>我是{{$route.query.name}}</p>
    <p>{{$route.query.height}}</p>
    <p>{{$route.query.age}}</p>

<!--    <p>{{$router}}</p>-->
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>

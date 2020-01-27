<template>
  <div>
    <p>网络请求 2</p>
    <p>1354 拦截器</p>
    <hr>
    <p>{{msg}}</p>
  </div>
</template>

<script>

  export default {
    name: "NetComponet2",
    computed:{
      msg(){
        let msg;
        this.$request({
          url:'http://123.207.32.32:8000/home/multidata'
        }).then(res=> msg = res)
      }
    }
  }
</script>

<style scoped>

</style>

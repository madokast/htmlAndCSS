<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        currentPath: null
      };
    },
    activated() {
      console.log('activated');

      this.$router.push(this.currentPath).catch((err)=>{});
    },
    deactivated() {
      console.log('deactivated');
    },
    created() {
      console.log('created');
    },
    destroyed() {
      console.log('destroyed');
    },
    beforeRouteLeave(to, from, next) {
      this.currentPath = this.$route.path;
      console.log(this.currentPath);
      next();
    },
  }
</script>

<style scoped>
  div {
    color: blue;
  }
</style>

<template>
  <div id="app">
    <h2>头信息</h2>
    <div>
      <router-link to="/home" tag="button" replace>首页</router-link>
      <router-link to="/about" tag="button" replace>关于</router-link>
      <router-link :to="/user/+userId" tag="button" replace>用户</router-link>
      <router-link :to="profileObj" tag="button" replace>档案</router-link>

      <keep-alive exclude="Profile">
        <router-view/>
      </keep-alive>

    </div>
    <h2>尾巴信息</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan',
        profileObj: {
          path: '/profile',
          query: {
            name: 'mdk',
            height: '1.52',
            age: 12
          }
        }
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>

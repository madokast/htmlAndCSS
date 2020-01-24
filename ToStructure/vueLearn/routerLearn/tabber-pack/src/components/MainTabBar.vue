<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" activeColor="pink">
        <img slot="item-icon" src="../assets/img/tabbar/home.gif" alt="home">
        <img slot="item-icon-active" src="../assets/img/tabbar/home_active.gif" alt="home_active">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/catalogue" activeColor="pink">
        <img slot="item-icon" src="../assets/img/tabbar/catalogue.gif" alt="catalogue">
        <img slot="item-icon-active" src="../assets/img/tabbar/catalogue_active.gif" alt="catalogue">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shopcart" activeColor="pink">
        <img slot="item-icon" src="../assets/img/tabbar/shopcart.gif" alt="shopcart">
        <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_activate.gif" alt="shopcart_active">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="pink">
        <img slot="item-icon" src="../assets/img/tabbar/profile.gif" alt="profile">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.gif" alt="profile_active">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {TabBarItem, TabBar},
    comments:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  /*引入外部CSS文件*/
  @import "../assets/css/base.css";
</style>

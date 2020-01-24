<template>
  <div id="tab-bar">
    <slot></slot>

<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/home.gif" alt="home">-->
<!--      <div>首页</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/catalogue.gif" alt="catalogue">-->
<!--      <div>分类</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/shopcart.gif" alt="shop-cart">-->
<!--      <div>购物车</div>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/profile.gif" alt="profile">-->
<!--      <div>我的</div>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  #tab-bar {
    display: flex;
    /*display:flex 是一种布局方式。
    它即可以应用于容器中，也可以应用于行内元素。
    是W3C提出的一种新的方案，可以简便、完整、
    响应式地实现各种页面布局。目前，它已经得到
    了所有浏览器的支持。*/
    /*背景颜色*/
    background-color: #f6f6f6;
    background-color: white;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  }
</style>

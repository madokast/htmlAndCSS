<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"/>
    </div>

    <div v-if="isActive">
      <slot name="item-icon-active"/>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"/>
    </div>

<!--    <img src="../../assets/img/tabbar/home.gif" alt="home">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive: false
      }
    },
    computed:{
      isActive(){
        //神仙写法
        return this.$route.path.indexOf(this.path)!==-1;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        if(this.path!==this.$route.path)
          this.$router.replace(this.path);

        console.log(this.$route.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /*均等化布局，太强了*/
    flex: 1;
    /*居中*/
    text-align: center;
    /*经验高度*/
    height: 49px;
    font-size: 14px;
    font-weight: bold;
  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /*.active{*/
  /*  color: pink;*/
  /*}*/
</style>

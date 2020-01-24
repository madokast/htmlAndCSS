import Vue from "vue";
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Catalogue = () => import('../views/catalogue/Catalogue');
const ShopCart = () => import('../views/shopcart/Shopcart');
const Profile = () => import('../views/profile/Profile');

// 安装插件
Vue.use(VueRouter);

//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catalogue',
    component: Catalogue
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

//导出
export default router

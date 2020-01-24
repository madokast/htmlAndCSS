import Vue from "vue";
import VueRouter from "vue-router";

const Home = ()=>import('../components/Home');
const Profile = ()=>import('../components/Profile');

Vue.use(VueRouter);

const router  = new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path: '/profile',
      component:Profile
    }
  ]
});


export default router;

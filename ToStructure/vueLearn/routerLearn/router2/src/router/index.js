import Vue from "vue";
import VueRouter from "vue-router";

const Home = ()=>import('../components/Home');
const Profile = ()=>import('../components/Profile');
const PromiseLearn = ()=>import('../components/learn/PromiseLearn');
const PromisLearn02 = ()=>import('../components/learn/PromisLearn02');
const VuexLearn = ()=>import('../components/learn/VuexLearn');
const NetComponent = ()=>import('../components/learn/NetComponent');

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
    },
    {
      path:'/promise',
      component:PromiseLearn
    },
    {
      path:'/PromisLearn02',
      component:PromisLearn02
    },
    {
      path:'/VuexLearn',
      component:VuexLearn
    },
    {
      path:'/NetComponent',
      component:NetComponent
    }
  ]
});


export default router;

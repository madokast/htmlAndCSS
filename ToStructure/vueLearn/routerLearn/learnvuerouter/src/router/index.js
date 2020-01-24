import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//懒加载
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeMessage = () => import('../components/Home/HomeMessage');
const HomeNews = () => import('../components/Home/HomeNews');
const Profile = () => import('../components/Profile');


Vue.use(Router);

const router = new Router({
  //配置映射关系
  routes: [
    //默认路由
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'news',
          component: HomeNews
        }
        , {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      //这里是component 不是components
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  //默认是hash路由，这里改成html5的历史栈
  mode: 'history',
  //活跃组件的类
  //linkActiveClass:'aaa'
});

router.beforeEach(((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
}));

export default router;

// 路由器对象模块

// 如何创建一个路由器对象呢？
//1.引入vue
import Vue from 'vue';
//2.首要要引入 vue-router
import VueRouter from "vue-router";
//5.导入路由需要用到的组件
import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Login from '../pages/Login/Login.vue';
//3.声明使用插件
Vue.use(VueRouter);

//4.创建一个路由器（路由器管理的是一堆路由）
const router = new VueRouter({
    routes: [ // 配置多个路由
        {                     // 每一个链接都是一个对象（或者说 每一个路由，都是一个配置对象）
            path: '/msite',    // 连接地址
            component: Msite,  // 对应的组件模板
            // 如果你的路径是 '/about'，那么我就给你看 About 这个组件。
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/login',
            component: Login,
        },
        { //默认显示
            path: '/',
            redirect: '/msite'
        }
    ]
});

//6.最后需要把 router 暴露出去
export default router;
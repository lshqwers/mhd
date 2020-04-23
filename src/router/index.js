/* 1.安装vue-router */
// npm install --save vue-router
import Vue from 'vue'
/* 创建一个router.js , 引入vue-router */
import VueRouter from 'vue-router'
/* 引入组件,这里的名字是各个暴露的名字,后缀名index.vue可以省略vue */
import Home from '../views/Home'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Resgin from '../views/Resgin'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
/* 3. 在router.js 中引入vue 并调用 Vue.use方法 */
Vue.use(VueRouter)
/* 4. 在router.js 中引入创建的router实例对象并导出 */
/* 定义路由的规则(数组对象的方式去) */
const router = new VueRouter({
  routes: [ // 不要把routers写错,否则不会渲染出来
    /* component组件的名字 */
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    /* 二级路由 */
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'favorite',
          component: Favorite
        },
        {
          path: 'history',
          component: History
        },
        {
          path: '',
          redirect: '/hello/favorite'
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/ranking', omponent: Ranking },
    { path: '/resgin', component: Resgin },
    { path: '/search', component: Search },
    { path: '/searchResult', component: SearchResult },
    { path: '/vip', omponent: Vip },
    // 重定向首页
    { path: '/', redirect: '/home' }

  ]
})
export default router// 5. 在main.js中引入创建的router实例（因为main.js 中创建了new Vue）
// import router from './router'//页面组件写好后//配置路由

/* 1.安装vue-router */
// npm install --save vue-router
import Vue from 'vue'
/* 创建一个router.js , 引入vue-router */
import VueRouter from 'vue-router'
/* 引入组件,这里的名字是各个暴露的名字,后缀名index.vue可以省略vue */
import Home from '../views/Home/index'
import Classify from '../views/Classify/index'
import Hello from '../views/Hello/index'
import Favorite from '../views/Hello/Favorite/index'
import History from '../views/Hello/History/index'
import Login from '../views/Login/index'
import My from '../views/My/index'
import Ranking from '../views/Ranking/index'
import Resgin from '../views/Resgin/index'
import Search from '../views/Search/index'
import SearchResult from '../views/SearchResult/index'
import Vip from '../views/Vip/index'
/* 3. 在router.js 中引入vue 并调用 Vue.use方法 */
Vue.use(VueRouter)
/* 4. 在router.js 中引入创建的router实例对象并导出 */
/* 定义路由的规则(数组对象的方式去) */
const router = new VueRouter({
  routers: [
    /* component组件的名字 */
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
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
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/ranking', omponent: Ranking },
    { path: '/resgin', component: Resgin },
    { path: '/search', component: Search },
    { path: '/searchResult', component: SearchResult },
    { path: '/vip', omponent: Vip }
  ]
})
export default {
  router
}// 5. 在main.js中引入创建的router实例（因为main.js 中创建了new Vue）
// import router from './router'//页面组件写好后//配置路由

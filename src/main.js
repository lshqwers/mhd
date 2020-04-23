import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 5. 在main.js中引入创建的router实例（因为main.js 中创建了new Vue）
import router from './router'
// 在入口文件中去引入,初始的样式 不需要变量名去接受 直接去写样式文件的地址路径
import './assets/base.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

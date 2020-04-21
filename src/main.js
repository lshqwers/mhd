import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 5. 在main.js中引入创建的router实例（因为main.js 中创建了new Vue）
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

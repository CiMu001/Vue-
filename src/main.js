import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex
import store from '@/store' 
// 引入mock虚拟数据
import '@/mock/mockServe'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

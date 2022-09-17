import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入vuex
import store from '@/store' 
// 引入mock虚拟数据
import '@/mock/mockServe'
import { Button, Form, FormItem, Input, Checkbox, Notification, Breadcrumb, BreadcrumbItem } from 'element-ui'; // 按需引入组件

Vue.use(Button); // 注册全局组件
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

Vue.prototype.$notify = Notification;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

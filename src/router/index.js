// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 重写push/replace 因为编程式当前页重复调用的报错
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(value, resolve, reject) {
    if(resolve && reject){
        originPush.call(this, value, resolve, reject)
    }else {
        originPush.call(this, value, ()=>{}, ()=>{})
    }
}

VueRouter.prototype.originReplace = function(value, resolve, reject) {
    if(resolve && reject){
        originReplace.call(this, value, resolve, reject)
    }else {
        originReplace.call(this, value, ()=>{}, ()=>{})
    }
}

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            props:($route) => ({ ...$route.params, ...$route.query, ...$route.meta })
        },
        {
            name: 'search',
            path: "/search",
            component: Search,
            props:($route) => ({ ...$route.params, ...$route.query, ...$route.meta })
        },
        {
            path: "/login",
            component: Login,
            meta: {
                hiddenFooter: true
            },
            props:($route) => ({ ...$route.params, ...$route.query })
        },
        {
            path: "/register",
            component: Register,
            meta: {
                hiddenFooter: true
            },
            props:($route) => ({ ...$route.params, ...$route.query })
        },
        {
            //重定向设置
            path: '*',
            redirect: '/home',
        }

    ]
})

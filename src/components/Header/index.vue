<template>
  <div class="header">
    <div class="top-nav">
        <div class="outerBox">
            <div class="login-info">
                <span>此系统欢迎你!</span>
                <router-link to="/login" class="login pointer">请登录</router-link >
                <router-link to="/register" class="login pointer">注册账号</router-link>
            </div>
            <div class="nav">
                <div v-for="itme in navList" class="nav-item pointer" :key="itme">{{itme}}</div>
            </div>
        </div>
    </div>
    <div class="interPart outerBox">
        <div class="logoBox">
            <img @click="() => { $router.push('/home') }" src="../../assets/logo.png" class="logo pointer" />
            <div @click="() => { $router.push('/home') }" class=" logoName pointer">维品汇</div>
            <img src="https://b.appsimg.com/upload/momin/2020/04/16/150/1587017895494.jpg" class="momin pointer" />
        </div>
        <div class="searchBox">
            <input v-model="searchInfo" />
            <button @click="() => { $router.push({name: 'search', query: {q: searchInfo}}) }" class="pointer">搜索</button>
        </div>
    </div>
    <TypeNav v-show="!($route.path.match(/login|register/))"></TypeNav>
  </div>
</template>

<script>
import TypeNav from '../TypeNav'

export default {
    name: '',
    components: { TypeNav },
    data() {
        return {
            showTypeNav: true,
            searchInfo: '',
            navList: ['签到有礼','我的订单','我的特卖','会员俱乐部','客服服务','手机版', '更多'],
        }
    },
}
</script>

<style scoped>
.header{ 
    width: 100%;
    font-size: 12px;
    letter-spacing: 1px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
    z-index: 99;
}

/* 导航栏一行 */
.top-nav {
    height: 30px;
    background-color: #f5f5f5;
}

.outerBox {
    position: relative;
    height: 30px;
    margin: 0 auto;
    width: 60%;
    min-width: 1170px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-info {
    width: 50%;
    padding-left: 10px;
    line-height: 30px;
}

.login-info .login {
    margin: 0 15px;
}

.login-info .login:nth-child(3)::before,
.nav div:nth-child(n+2)::before {
    content: "/";
    position: absolute;
    margin-left: -17px;
    color: #d5d5d5;
    cursor: auto;
}

.nav {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    color: #666;
}

.nav-item {
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 32px;
}

.nav-item:hover {
    color: #f10180;
}

/* 搜索框一行 */
.interPart {
    height: 120px;
}

.logoBox {
    width: 50%;
    display: flex;
    align-items: center;
}

.logoBox .logo {
    width: 50px;
    filter: invert(100%);
}

.logoBox .momin {
    margin-left: 20px;
    width: 370px;
}

.logoBox .logoName {
    font-size: 25px;
    flex: 0 0 78px;
}

.searchBox {
    display: flex;
    justify-content: flex-end;
    width: 50%;
}

.searchBox input, .searchBox button {
    line-height: 34px;
    font-size: 16px;
    border: 2px solid #f10180;
}

.searchBox input {
    width: 380px;
    padding: 2px 12px;
    border-right: 0;
}

.searchBox input:focus {
    outline: 0;
}

.searchBox button {
    flex-shrink: 0;
    padding: 2px 20px;
    font-size: 16px;
    background-color: #f10180;
    color: #fff;
}

.pointer {
    cursor: pointer;
}

</style>
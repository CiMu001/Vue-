<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- v-show="!$route.meta.hiddenFooter"  -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header, Footer,
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
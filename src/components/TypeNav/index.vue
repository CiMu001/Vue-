<template>
    <div :class="{'fixed-show': navfixed}">
        <div class="outbox">
            <div class="nav-btn" @mouseenter="() => {isHov = true}" @mouseleave="() => { isHov = false }">
                <a class="pointer">商品分类</a>
                <div class="sort" :style="{'height': isHov ? '470px' : '0px'}" @mouseenter.capture="hovlv2" @mouseleave="leavelv2">
                    <div class="nav-lv2-box">
                        <div class="lv2-txt pointer" :class="{'selected': isSelectedIndex == index}" v-for="(item, index) in categoryList" :key="item.categoryId" :data-index="index">
                            <a :data-index="index">{{item.categoryName}}</a>
                        </div>
                    </div>
                    <div class="nav-lv3-box" v-show="isActivelv3 || isSelectedIndex">
                        <div class="lv3-item" v-for="item in lv3List" :key="item.categoryId">
                            <div class="lv3-title">{{item.categoryName}}</div>
                            <div class="lv4-list">
                                <div class="lv4-item" v-for="item in item.categoryChild" :key="item.categoryId">
                                    <a class="pointer" @click="jumpSearch">{{item.categoryName}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-txt pointer" v-for="item in mainNavList" :key="item">
                <a>{{item}}</a>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
import { throttle } from 'lodash'

export default {
      name: '',
      data() {
          return {
            navfixed: false,
            isHov: false,
            isActivelv3: false,
            isSelectedIndex: null,
            lv3List:[],
            mainNavList: ['推荐','3折疯抢','唯品快枪','唯品奢','女装',
                        '运动','鞋包','美妆','母婴','电器','男装','百货', '更多'],
          }
      },
      mounted() {
          this.$store.dispatch('getCategoryList')
          window.addEventListener('scroll', this.fiexdNav)
      },
      destroyed() {
          window.removeEventListener('scroll', this.fiexdNav)
      },
      methods: {
          fiexdNav() {
              const scrollTop = document.documentElement.scrollTop
              if(scrollTop > 150) {
                  this.navfixed = true
              }else {
                  this.navfixed = false
              }
          },
          hovlv2: throttle(function(e){
            const { index } = e.target.dataset
            if(!index) {
                return
            }
            this.lv3List = this.categoryList[index].categoryChild
            this.isActivelv3 = true
            this.isSelectedIndex = index
          }, 50),
          leavelv2() {
            this.isActivelv3 = false
            this.isSelectedIndex = null
          },
          jumpSearch(e) {
            const searchInfo = e.target.text

            // 新页面跳转
            let routeUrl = this.$router.resolve({name: 'search', query: {categoryName: searchInfo}})
            window.open(routeUrl.href, '_blank');

            // 本页面跳转
            // this.$router.push({name: 'search', query: {q: searchInfo}})
            // this.leavelv2()
            // this.isHov = false
          }
      },
      computed: {
          ...mapState({
              categoryList: state => state.home.categoryList,
          })
      }
  }
</script>
  
<style scoped>
.fixed-show {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 2px 2px 3px 0 rgba(0,0,0, 0.1);
    width: 100%;
    z-index: 99;
    animation: fixed-top 0.5s ease-in;
}

.outbox {
    position: relative;
    margin: 0 auto;
    width: 60%;
    min-width: 1170px;
    display: flex;
    align-items: center;
    z-index: 5;
}

.nav-btn {
    position: relative;
    height: 43px;
    line-height: 43px;
    font-size: 16px;
    padding: 0 40px;
    margin-right: 25px;
    background-color: #f10180;
    color: #fff;
}

.nav-txt {
    height: 43px;
    line-height: 43px;
    font-size: 16px;
    padding: 0 12px;
}

.nav-txt:nth-child(2){
    cursor: default;
    font-weight: 700;
    color: #f10180;
}

.nav-txt:hover {
    color: #f10180;
}

.sort {
    position: absolute;
    left: 0;
    width: 100vw;
    max-width: 1170px;
    height: 0px;
    transition: height 300ms ease;
    overflow: hidden;
}

.nav-btn:hover .sort{
    height: 470px;
}

.nav-lv2-box {
    width: 148px;
    height: 100%;
    background-color: #f10180;
    box-shadow: 2px 2px 3px 0 rgba(0,0,0, 10%);
}

.lv2-txt {
    font-size: 12px;
    padding: 0 30px;
}

.selected {
    background-color: #fff;
    color: #f10180;
}

.nav-lv3-box {
    position: absolute;
    left: 148px;
    top: 0;
    width: calc(100% - 148px);;
    height: calc(448.3px);
    padding: 10px 40px;
    color: #000;
    font-size: 12px;
    background-color: #fff;
    overscroll-behavior: contain;
    border-top: 1px solid #f5f5f5;
    box-shadow: 0 1px 3px 0px rgb(0 0 0 / 10%); 
    overflow-y: scroll;
}

.lv3-item {
    display: flex;
}

.lv3-title {
    width: 80px;
    font-weight: 700;
}

.lv3-title::after {
    float: right;
    content: '>';
    font-weight: 700;
}

.lv4-list {
    margin-left: 5px;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
}

.lv4-item {
    padding: 0 10px;
}

.lv4-item:hover {
    color: #f10180;
}

.pointer {
    cursor: pointer;
}

@keyframes fixed-top {
    from{
        transform: translateY(2px);
    }
    to {
        transform: translateY(0);
    }
}

</style>
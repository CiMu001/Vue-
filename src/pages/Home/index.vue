<template>
  <div class="bc">
    <div class="main">
      <div class="banner">
        <img src="@/assets/img/轮播图1.jpg" />
      </div>
      <!-- 热卖推荐 -->
      <div class="hot-sale">
        <div class="title-bc"></div>
        <div class="hot-sale-info">
          <div class="hot-sale-item" v-for="(item, index) in hotSaleDatas" :key="item.id"
            :style="{background: `url(${item.imgUrl})`,'background-size': 'cover'}"
            :class="{ right: (index+1) % 2 === 0, bottom: index >=2 }"
          >
            <div class="goodBox" :class="{ right: (index+1) % 2 === 0, bottom: index >=2 }">
              <div class="good" v-for="good in item.goods" :key="good.id"
                :style="{background: `url(${good.goodImgUrl})`,'background-size': 'cover'}"
              >
                <div class="brand" :style="{background: `url(${good.BrandImgUrl})`,'background-size': '80px 40px',
                  'background-position': 'center', 'background-repeat': 'no-repeat', 'background-color': 'rgba(255 255 255 / 90%)'}">
                </div>
                <p class="brand-name">{{good.BrandName}}</p>
                <p class="price"><span>特卖价</span>￥{{good.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品展示 -->
      <div class="good-box">
        <div class="good-item" v-for="item in goodDataList" :key="item.id">
          <img :src="item.imgUrl" />
          <div class="title">
            <span>{{item.discount}}</span>折起
            <span style="margin-left: 6px">{{item.title}}</span>
          </div>
        </div>
        <button class="more-data-btn">点击查看更多 >></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getHotSale')
    this.$store.dispatch('getGoods')
  },
  computed: {
    hotSaleDatas() {
      return this.$store.getters.hotSaleDatas
    },
    goodDataList() {
      return this.$store.getters.goodDataList
    }
  }
}
</script>

<style>
.bc {
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  background-image: url(@/assets/img/轮播背景.jpg);
}

.main {
  position: relative;
  margin: 0 auto;
  width: 60%;
  min-width: 1170px;
}

.banner {
  padding: 45px 0 0 0;
}

.banner img {
  background: rgba(255,255,255,.86);
  box-shadow: 0 1px 3px rgb(167 167 167 / 40%);
  background-repeat: no-repeat;
  width: 98%;
  padding: 1%;
}

.hot-sale {
  margin-top: 50px;
}

.hot-sale .title-bc {
  width: 100%;
  height: 70px;
  background: url('@/assets/img/热门标题.jpg');
  background-position: center;
  background-repeat: no-repeat;
}

.hot-sale-info {
  width: 100%;
  height: 714px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
}

.hot-sale-item {
  width: 600px;
  height: 332px;
  object-fit: cover;
}

.hot-sale-item.right {
  width: 570px
}

.hot-sale-item.bottom {
  height: 362px;
}

.goodBox {
  margin: 70px 45px 10px 25px;
  display: flex;
  justify-content: space-between;
}

.goodBox.right {
  margin-right: 16px;
}

.goodBox.bottom {
  margin-top: 100px;
}

.good {
  width: 172px;
  height: 172px;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand{
  width: 122px;
  height: 76px;
  position: absolute;
  bottom: -25px;
  border-radius: 12px;
}

.brand-name {
  margin-top: 185px;
  font-size: 14px;
  z-index: 5;
}

.price {
  margin-top: 0px;
  font-size: 16px;
}

.price span {
  font-size: 12px;
  color: #fff;
  padding: 2px 5px;
  border-radius: 20px;
  background-color: #f10180;
}

.good-box {
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 50px;
  margin-top: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  font-family: MicrosoftYaHei;
  font-weight: 700;
  font-size: 20px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.good-item {
  width: calc(49% - 2px);
  margin: 25px 0;
}

.good-box img {
  margin-bottom: 20px;
  width: 100%;
}

.good-item .title span:first-child {
  color: red;
  font-size: 26px;
}

.more-data-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f10180;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 36px 0 36px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  display: inline-block;
  border: 0;
}


</style>
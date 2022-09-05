<template>
  <div class="bc">
    <div class="main">
      <div class="banner">
        <img src="@/assets/img/轮播图1.jpg" />
      </div>
      <div class="hot-sale">
        <div class="title-bc"></div>
        <div class="hot-sale-info">
          <div class="hot-sale-item" :style="{background: `url(${require('@/assets/img/热卖1.jpg')})`, 'background-size': 'cover'}">
          </div>
          <div class="hot-sale-item right" :style="{background: `url(${require('@/assets/img/热卖2.jpg')})`, 'background-size': 'cover'}">
          </div>
          <div class="hot-sale-item bottom" :style="{background: `url(${require('@/assets/img/热卖3.jpg')})`, 'background-size': 'cover'}">
          </div>
          <div class="hot-sale-item right bottom" :style="{background: `url(${require('@/assets/img/热卖4.png')})`, 'background-size': 'cover'}">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bc {
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  background-image: url(//b.appsimg.com/upload/momin/2022/06/23/13/1655980581628.jpg);
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


.picture-box {
  background-color: antiquewhite;
  width: 100%;
  height: 172px;
}

</style>
<template>
  <div class="search-container">
    <div class="c-filter">
      <div class='groups'>
        <!-- 品牌 -->
        <div class="brand-filter">
          <div class="filter-title">品牌</div>
          <div class="brand-list">
            <div class="brand-item" v-for="brand in trademarkList" :key="brand.tmId" @click="filterBrand(brand.tmName, brand.tmId)">
              {{brand.tmName}}
            </div>
          </div>
        </div>
        <!-- 品类 -->
        <!-- <div class="category-filter">
          <div class="filter-title">品类</div>
          <div class="category-list">
            <div class="category-item">手机</div>
            <div class="category-item">电脑</div>
            <div class="category-item">电话</div>
          </div>
        </div> -->
        <!-- 物品属性 -->
        <div class="props-filter-groups">
          <div class="props-filter-item" v-for="props in attrsList" :key="props.attrId">
            <div class="filter-title">{{props.attrName}}</div>
            <div class="props-vals">
              <div class="props-val" v-for="(attr, index) in props.attrValueList" :key="index" @click="filterProps(props.attrId, attr, props.attrName)">
                {{attr}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-list" ref="goodsBox">
      <div class="goods-item" v-for="goods in goodsList" :key="goods.id">
        <a target="_blank">
          <div class="goods-item-img">
            <img :src="goods.defaultImg" />
          </div>
          <div class="goods-item-price">
            ￥{{goods.price}}<span class="price-suff">起</span>
          </div>
          <div class="goods-item-title">
            {{goods.title}}
          </div>
        </a>
      </div>
      <h3 style="text-align: center" v-show="(pageNo===totalPages)">没有更多商品了...</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { throttle } from 'lodash'

export default {
  name: 'search',
  props: ['q'],
  data(){
    return {
      filterInfo: {
        trademark: '',
        props: {},
        categoryName: '',
      },
      pageNo: 1,
      pageSize: 20,
    }
  },
  mounted() {
    this.getData()
    this.scroll()
  },
  methods: {
    async getData() {
      const { filterInfo, pageNo, pageSize, q } = this
      const { props, trademark, categoryName } = filterInfo
      const propsArr =  Object.values(props)
      await this.$store.dispatch('getSearchInfo', { props: propsArr, trademark, categoryName, pageNo, pageSize, keywrod: q })
    },
    scroll() {
      window.onscroll = throttle(()=>{
        let goodBoxOffsetHeight = this.$refs.goodsBox.offsetHeight
        let bottomOfBox = document.documentElement.scrollTop > goodBoxOffsetHeight + 846 - 969
        
        const { filterInfo, pageNo, pageSize, totalPages, q  } = this
        const { props, trademark, categoryName } = filterInfo
        const propsArr =  Object.values(props)
        if(bottomOfBox && (pageNo < totalPages)) {
          this.pageNo += 1 
          this.$store.dispatch('getGoodsList', { props: propsArr, trademark, categoryName, pageNo, pageSize, keywrod: q })
        }
      }, 500)
    },
    filterProps(propsId, attr, propsName){
      const { props } = this.filterInfo
      props[propsId] = `${propsId}:${attr}:${propsName}`
      this.getData()
    },
    filterBrand(name, id) {
      this.filterInfo.trademark = `${id}:${name}`
      this.getData()
    }
  },
  computed: {
    searchInfo() {
      return this.$store.state.search.searchList
    },
    ...mapGetters(['goodsList', 'attrsList', 'trademarkList', 'totalPages'])
  },
  watch: {
    $route(newVal, oldVal) {
      this.getData()
    }
  }
}
</script>

<style>
.search-container {
  width: 60%;
  min-width: 1170px;
  margin: 0 auto;
}

.c-filter {
  margin-top: 13px;
  margin-bottom: 20px;
}

.c-filter .groups {
  border: 1px solid #dfdfdf
}

.c-filter .groups {
  border: 1px solid #dfdfdf
}

.c-filter .groups>div, .props-filter-groups>div {
  margin-top: -1px;
  border-top: 1px dotted #ddd;
}

.brand-filter, .category-filter, .props-filter-item {
  display: flex;
  padding: 20px;
}

.filter-title {
  margin: 0 60px 0 0;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  color: #666;
}

.brand-list, .category-list, .props-vals {
  display: flex;
  flex-wrap: wrap;
}

.brand-item {
  margin-top: -1px;
  margin-left: -1px;
  /* width: 100%; */
  padding: 0 40px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #f0f0f0;
}

.category-item, .props-val {
  margin-right: 50px;
  height: 16px;
  font-size: 14px;
}

.brand-item:hover, .category-item:hover, .props-val:hover {
  color: #f10180;
  cursor: pointer;
}

.goods-list {
  padding-top: 16px;
  padding-bottom: 16px;
}

.goods-item {
  width: 218px;
  border: solid 1px #e7e7e7;
  position: relative;
  overflow: visible;
  font-family: arial;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 20px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
}

.goods-item:nth-child(5n) {
  margin-right: 0;
}

.goods-item-img {
  width: 100%;
  height: 100%;
}

.goods-item-img img {
  max-width: 100%;
  height: 218px;
  display: block;
  width: auto;
  margin: 0 auto
}

.goods-item-price {
  box-sizing: border-box;
  height: 30px;
  padding: 12px;
  color: #333;
  font-size: 23px;
  line-height: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 194px;
}

.price-suff {
  color: #333;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
}

.goods-item-title {
  height: 45px;
  padding: 12px;
  font-size: 12px;
  color: #666;
  line-height: 18px;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
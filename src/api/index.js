import requset from "./request"
import mockRequset from './mockRequest'

// 获取商品种类
export const getBaseCategoryList = () => requset({url: '/product/getBaseCategoryList', method: 'get'})
// 获取mock中热卖区数据
export const getHotSaleData = () => mockRequset.get('/hotSaleDataList')
// 获取商品展示数据
export const getGoodData = () => mockRequset.get('/goodDataList')
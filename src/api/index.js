import requset from "./request";

// /api/product/getBaseCategoryList
// 获取商品种类
export const getBaseCategoryList = () => requset({url: '/product/getBaseCategoryList', method: 'get'})
import Mock from 'mockjs'
import hotSaleDataList from './hotSaleDataList.json'
import goodDataList from './goodDataList.json'

// 第一个参数请求地址， 第二参数 请求数据
Mock.mock("/mock/hotSaleDataList", {code:200, data: hotSaleDataList})
Mock.mock("/mock/goodDataList", {code:200, data: goodDataList})
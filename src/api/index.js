import requset from "./request"
import mockRequset from './mockRequest'

// 获取商品种类
export const getBaseCategoryList = () => requset({url: '/product/getBaseCategoryList', method: 'get'})
// 获取mock中热卖区数据
export const getHotSaleData = () => mockRequset.get('/hotSaleDataList')
// 获取商品展示数据
export const getGoodData = () => mockRequset.get('/goodDataList')
// 获取验证码
export const reqCode = (phone) => requset({url: `/user/passport/sendCode/${phone}`, method: 'get'})
// 注册用户
export const registerUser = data => requset({url: '/user/passport/register', method: 'post', data})
// 登录
export const loginUser = data => requset({url:'/user/passport/login', method: 'post', data})
// token获取用户信息
export const reqUserInfo = () => requset({url: '/user/passport/auth/getUserInfo', method: 'get'})
// 退出登录
export const reqLogout = () => requset({url: '/user/passport/logout', method: 'get'})
// 获取模块数据
export const reqSearchInfo = data => requset({url: '/list', method: 'post', data})
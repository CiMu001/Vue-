// axios 二次封装
import axios from "axios"
// 进度条
import nProgress from "nprogress"
import "nprogress/nprogress.css"

const requset = axios.create({
    // 配置
    baseURL: '/api',
    timeout: 5000,
})

// 请求拦截器
requset.interceptors.request.use((config) => {
    nProgress.start()
    return config
})

// 响应拦截器
requset.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
},(err) =>{
    return Promise.reject(new Error('faile'))
})

export default requset
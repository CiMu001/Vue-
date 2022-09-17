// user 仓库
import { reqCode, registerUser, loginUser, reqUserInfo, reqLogout } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'

const state = {
    code: '',
    regMes: '',
    token: getToken(),
    userInfo: {},
}

const actions = {
    async getCode({commit}, phone) {
        const res = await reqCode(phone)

        if(res.code===200) {
            
            commit('setCode', { data: res.data })
            return '成功'
        } else {
            return Promise.reject(new Error('失败'))
        }
    },
    async register({}, userData) {
        const res = await registerUser(userData)

        if(res.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(res.message))
        }
    },
    async login({commit}, userData) {
        const res = await loginUser(userData)

        if(res.code === 200) {
            const token = res.data.token
            setToken(token)
            commit('setToken', { token })
            return 'ok'
        } else {
            return Promise.reject(new Error(res.message))
        }
    },
    async getUserInfo({commit}, userData) {
        const res = await reqUserInfo(userData)

        if(res.code === 200) {
            commit('setUserInfo', { data: res.data })
            
            return 'ok'
        } else {
            return Promise.reject(new Error(res.message))
        }
    },
    async userLogout({commit}) {
        const res = await reqLogout()

        if(res.code === 200) {
            commit('setToken', { token: '' })
            commit('setUserInfo', { data: {} })
            removeToken()
            return 'ok'
        } else {
            return Promise.reject(new Error(res.message))
        }
    },
    
}

const mutations = {
    setCode(state, { data }) {
        state.code = data
    },
    setToken(state, { token }) {
        state.token = token
    },
    setUserInfo(state, { data }) {
        state.userInfo = data
    },
}

const getters = {
    authCode(state) {
        return state.code
    },
}

export default {
    state, actions, mutations, getters
}
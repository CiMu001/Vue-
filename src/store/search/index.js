// search 仓库
import { reqSearchInfo } from "@/api"
import { guid } from '@/utils/index'

const state = {
    searchList: {},
    goodsList: [],
}

const actions = {
    async getSearchInfo({commit}, data={}) {
        const res = await reqSearchInfo(data)

        if(res.code === 200) {
            commit('setSearchList', { data: res.data })
            commit('setGoodsList', { data: res.data.goodsList })
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getGoodsList({commit}, data={}) {
        const res = await reqSearchInfo(data)

        if(res.code === 200) {
            const { goodsList } = res.data
            goodsList.forEach(goods => {
                goods.id = guid()
            });
            commit('updatagoodsList', { data: goodsList })
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
}

const mutations = {
    setSearchList(state, { data }) {
        state.searchList = data
    },
    setGoodsList(state, { data }) {
        state.goodsList = data
    },
    updatagoodsList(state, { data }) {
        state.goodsList = [...state.goodsList, ...data]
    },
}

const getters = {
    goodsList(state) {
        return state.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    totalPages(state) {
        return state.searchList.totalPages
    }
}

export default {
    state, actions, mutations, getters
}
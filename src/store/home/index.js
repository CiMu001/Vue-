// home 仓库
import { getBaseCategoryList, getHotSaleData, getGoodData } from '@/api'
import { guid } from '@/utils/index'

const state = {
    categoryList: [],
    hotSaleDataList: [],
    goodDataList: []
}

const actions = {
    async getCategoryList({commit}) {
        const res = await getBaseCategoryList()

        if(res.code===200) {
            // 只取1-10个
            const data = res.data.slice(1,11)
            commit('setCategoryList', { data })
        }
    },
    async getHotSale({commit}) {
        const res = await getHotSaleData()

        if(res.code===200) {
            const data = res.data
            commit('setHotSaleData', { data })
        }
    },
    async getGoods({commit}) {
        const res = await getGoodData()

        if(res.code===200) {
            const data = res.data
            commit('setGoodData', { data })
        }
    },
    async scrollGetGoods({commit}) {
        const res = await getGoodData()

        if(res.code===200) {
            const data = res.data
            data.forEach(i => {
                i.id = guid()
                i.title = i.title + Math.floor((Math.random()*10)+1)
                i.discount = i.discount + Math.floor((Math.random()*10)+1)
            });
            commit('updataGoodData', { data })
        }
    }
}

const mutations = {
    setCategoryList(state, { data }) {
        state.categoryList = data
    },
    setHotSaleData(state, { data }) {
        state.hotSaleDataList = data
    },
    setGoodData(state, { data }) {
        state.goodDataList = data
    },
    updataGoodData(state, { data }) {
        state.goodDataList = [...state.goodDataList, ...data]
    },
}

const getters = {
    hotSaleDatas (state) {
        return state.hotSaleDataList
    },
    goodDataList (state) {
        return state.goodDataList
    },
}

export default {
    state, actions, mutations, getters
}
// home 仓库
import { getBaseCategoryList } from '@/api'

const state = {
    categoryList: [],
}

const actions = {
    async getCategoryList({commit}) {
        const res = await getBaseCategoryList()

        if(res.code===200) {
            // 只取1-10个
            const data = res.data.slice(1,11)
            commit('setCategoryList', { data })
        }
    }
}

const mutations = {
    setCategoryList(state, { data }) {
        state.categoryList = data
    }
}

const getters = {}

export default {
    state, actions, mutations, getters
}
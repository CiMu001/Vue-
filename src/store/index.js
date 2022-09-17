import Vue from "vue"
import Vuex from 'vuex'
import home from './home'
import search from './search'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        home, search, user
    }
})
export default store
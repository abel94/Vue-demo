import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import position from './modules/position'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        position
    }
})
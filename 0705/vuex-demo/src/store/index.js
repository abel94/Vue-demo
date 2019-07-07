import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },

    mutations: {
        increment(state, action) {
           state.count += action.payload  
        }
    },

    actions: {
        incrementA(content, payload) {
           content.commit({
               type: 'increment',
               payload: 8
           })
        }
    }
})

export default store
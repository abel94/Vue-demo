import { Toast } from 'mint-ui'

export default {
    namespaced: true,

    state: {
        item: []
    },

    getters: {
        getProId(state) {
            return state.item
        }
    },

    mutations: {
        putProductToCart(state, id) {
            let product = state.item.find(value => {
                return value.id == id
            })
            if(product) {
                product.quantity ++
            } else {
                state.item.push({
                    id,
                    quantity: 1
                })
            }
            Toast({
                message: '添加成功',
                iconClass: 'icon icon-success'
            });
        }
    },

    actions: {
        putProductToCart({ commit }, id){
            commit('putProductToCart', id)
        },
        getProId({ commit }) {
            commit('getProId')
        }
    }
}
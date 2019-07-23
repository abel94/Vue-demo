export default {
    namespaced: true,

    state: {
        position: 0,
        page: 1,
        data: {}
    },

    mutations: {
        setPosition(state, position) {
            state.position = position
        },
        
        setPage(state, page){
            state.page = page    
        },

        resetPage(state) {
            state.page = 0
        }
    }

}
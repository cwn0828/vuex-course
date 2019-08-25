// 模块化：管理count状态
const state = {
    count: 0
};
const getters = {
    count: state => state.count
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount
};
const actions = {
    incrementCountAsync: ({ commit }) => {
        setTimeout(() => {
            // context等同于this.$store
            commit("incrementCount")
        }, 2000)
    },
    decrementCountAsync: (context, payload) => {
        setTimeout(() => {
            // context等同于this.$store
            context.commit("decrementCount", payload)
        }, 1000)
    },
};

export default {
    state, getters, mutations, actions
}
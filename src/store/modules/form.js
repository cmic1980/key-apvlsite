import form from '@/api/form'

// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getFormListByStatus({commit}, status) {
        form.getFormListByStatus(formList => {
            commit('setProductList', formList)
        },status)
    },approve({commit}, formId) {
        debugger
        form.approve(data => {

        },formId)
    },deny({commit}, formId) {
        debugger
        form.deny(formList => {

        },formId)
    }
}

// mutations
const mutations = {
    setProductList(state, formList) {
        state.all = formList
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

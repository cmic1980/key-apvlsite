import form from '@/api/form'

// initial state
const state = {
    all: [],
    item: {}
}

// getters
const getters = {}

// actions
const actions = {
    getFormListByStatus({commit}, status) {
        form.getFormListByStatus(formList => {
            commit('setFormList', formList)
        }, status)
    }, approve({commit}, formId) {
        form.approve(data => {

        }, formId)
    }, deny({commit}, formId) {
        form.deny(data => {

        }, formId)
    }, done({commit}, formId) {
        form.done(data => {

        }, formId)
    }, purge({commit}, formId) {
        form.purge(data => {

        }, formId)
    }, getFormById({commit}, formId) {
        form.getFormById(form => {
            commit('setForm', form)
        }, formId)
    }
}

// mutations
const mutations = {
    setFormList(state, formList) {
        state.all = formList
    },setForm(state, form) {
        state.item = form
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

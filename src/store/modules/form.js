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
            /*
            if (status == 1) {
                formList = [{
                    id: '1',
                    name: 'CITIC Securities Company Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-07 14:09:19',
                    status: 'Pending',
                    email: 'swhysc@swhysc.com'
                }, {
                    id: '2',
                    name: 'The Hongkong and Shanghai Banking Corporation Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'Pending',
                    email: 'whb@gmail.com'
                }, {
                    id: '3',
                    name: 'Jack Ma',
                    type: 'Individual',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'Resubmit',
                    email: 'jack.ma@alibaba.com'
                }]
            }

            if (status == 2) {
                formList =  [{
                    id: '1',
                    name: 'CITIC Securities Company Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-07 14:09:19',
                    status: 'Legal Approved',
                    email: 'swhysc@swhysc.com'
                }, {
                    id: '2',
                    name: 'The Hongkong and Shanghai Banking Corporation Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'Waiting MAS approval',
                    email: 'whb@gmail.com'
                }, {
                    id: '3',
                    name: 'Jack Ma',
                    type: 'Individual',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'Legal Approved',
                    email: 'jack.ma@alibaba.com'
                }]
            }


            if (status == 3) {
                formList =  [{
                    id: '1',
                    name: 'CITIC Securities Company Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-07 14:09:19',
                    status: 'MAS Approved',
                    email: 'swhysc@swhysc.com'
                }, {
                    id: '2',
                    name: 'The Hongkong and Shanghai Banking Corporation Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'MAS Approved',
                    email: 'whb@gmail.com'
                }, {
                    id: '3',
                    name: 'Jack Ma',
                    type: 'Individual',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'MAS Approved',
                    email: 'jack.ma@alibaba.com'
                }]
            }

            if (status == 4) {
                formList =   [{
                    id: '1',
                    name: 'CITIC Securities Company Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-07 14:09:19',
                    expirationTime: '2019-04-07',
                    status: 'Finished (Required renew)',
                    email: 'swhysc@swhysc.com'
                }, {
                    id: '2',
                    name: 'The Hongkong and Shanghai Banking Corporation Limited',
                    type: 'Corporate',
                    actionTime: '2019-05-11 11:59:12',
                    expirationTime: '2019-05-08',
                    status: 'Finished (Required renew)',
                    email: 'whb@gmail.com'
                }, {
                    id: '3',
                    name: 'Jack Ma',
                    type: 'Individual',
                    actionTime: '2019-04-11 11:59:12',
                    expirationTime: '2021-04-11',
                    status: 'Finished',
                    email: 'jack.ma@alibaba.com'
                }]
            }

            if (status == 5) {
                formList =   [{
                    id: '1',
                    name: 'CITIC Securities Company Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-07 14:09:19',
                    status: 'Refused',
                    email: 'swhysc@swhysc.com'
                }, {
                    id: '2',
                    name: 'The Hongkong and Shanghai Banking Corporation Limited',
                    type: 'Corporate',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'Refused (Need Supplementary Materials)',
                    email: 'whb@gmail.com'
                }, {
                    id: '3',
                    name: 'Jack Ma',
                    type: 'Individual',
                    actionTime: '2019-04-11 11:59:12',
                    status: 'Refused',
                    email: 'jack.ma@alibaba.com'
                }]
            }*/

            commit('setProductList', formList)
        },status)


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

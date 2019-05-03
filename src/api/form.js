import {fetch as fetchPolyfill} from 'whatwg-fetch'

export default {
    getFormListByStatus(cb, status) {
        fetchPolyfill('/api/form/list?status=' + status)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                debugger
                console.log('parsed json', data)
                let formList = data
                setTimeout(() => cb(formList), 100)
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

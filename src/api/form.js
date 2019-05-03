import {fetch as fetchPolyfill} from 'whatwg-fetch'
import user from '@/api/user'

export default {
    getFormListByStatus(cb, status) {
        fetchPolyfill('/api/form/list?status=' + status)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log('parsed json', data)
                let formList = data
                setTimeout(() => cb(formList), 100)
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }, approve(cb, formId) {
        const postData = JSON.stringify({
            "id": formId
        })

        fetchPolyfill('/api/form/approve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.getToken()
            },
            body: postData
        })
            .then(function (response) {
                return response.json()
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }, deny(cb, formId) {
        const postData = JSON.stringify({
            "id": formId
        })

        fetchPolyfill('/api/form/deny', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.getToken()
            },
            body: postData
        })
            .then(function (response) {
                return response.json()
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }, done(cb, formId) {
        const postData = JSON.stringify({
            "id": formId
        })

        fetchPolyfill('/api/form/done', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.getToken()
            },
            body: postData
        })
            .then(function (response) {
                return response.json()
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }, purge(cb, formId) {
        const postData = JSON.stringify({
            "id": formId
        })

        fetchPolyfill('/api/form/purge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.getToken()
            },
            body: postData
        })
            .then(function (response) {
                return response.json()
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }, getFormById(cb, formId) {
        fetchPolyfill('/api/form/get?formId=' + formId)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log('parsed json', data)
                let form = data
                setTimeout(() => cb(form), 100)
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

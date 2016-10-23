import Vue from '../main'

const store = {}

export default store

store.state = {
    topic: null
}

store.getServices = () => {
    return new Promise((resolve, reject) => {
        Vue.http({ url: 'services', 'method' : 'GET'}).then(response => {

        })
    })
}

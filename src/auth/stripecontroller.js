import Vue from '../main'
import {router} from '../main'

export default {
    stripe(context, object){
        Vue.http({
            url: 'auth/asww',
            method: 'POST',
            data: {
                object:object
            }
        }).then(response => {
            console.log(response);
        })
    }

}

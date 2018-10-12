import axios from 'axios'
import * as t from '../constants'

import { checkCradetials } from '../helpers/checkCradetials'
import { errors, url } from '../constants'

export const loginRequest = () => ({
    type: t.LOG_IN_REQUEST,
})

export const loginSuccess = (data, id) => {
    localStorage.setItem('user', JSON.stringify(data.id))
    return ({
        type: t.LOG_IN_SUCCESS,
        payload: { data }
    })
}
export const loginFailture = (errorMsg) => ({
    type: t.LOG_IN_FAILTURE,
    payload: {
        errorMsg: errors[errorMsg]
    },
    error: true
})


export function login(data, cb) {
    return dispatch => {
        dispatch(loginRequest())
        axios({
            method: 'post',
            url: url + '/validate',
            data: data,
        })
            .then(res => {
                if (checkCradetials(res.data)) {
                    dispatch(loginSuccess(res.data.data))
                    cb()
                } else {
                    dispatch(loginFailture(res.data.message))
                }
            })
            .catch(err => {
                dispatch(loginFailture())
            })
    }
}

export function logout() {
    localStorage.removeItem('user')
    return {
        type: t.LOG_OUT
    }
}
import axios from 'axios'
import * as t from '../constants'

import { checkCradetials } from '../helpers/checkCradetials'
import { defaultErrorMsg, url } from '../constants'

export const loginRequest = () => ({
    type: t.LOG_IN_REQUEST,
})

export const loginSuccess = (email) => ({
    type: t.LOG_IN_SUCCESS,
    payload: { email }
})

export const loginFailture = (errorMsg = defaultErrorMsg) => ({
    type: t.LOG_IN_FAILTURE,
    payload: {
        errorMsg
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
                    dispatch(loginSuccess(data.email))
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
    return {
        type: t.LOG_OUT
    }
}
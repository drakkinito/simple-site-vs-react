import axios from 'axios'
import * as t from '../constants'

import { url, errors } from '../constants'

const profileSuccess = (data) => ({
    type: t.GET_PROFILE,
    payload: data
})

const profileFailture = (err) => ({
    type: t.GET_PROFILE_ERROR,
    payload: errors[err]
})

export function getProfile(id) {
    return dispatch => {
        dispatch({ type: t.PROFILE_REQUEST })
        axios.get(url + `/user-info/${id}`)
            .then(res => {
                if (res.data.status === 'ok') {
                    dispatch(profileSuccess(res.data.data))
                } else {
                    console.log('res-err', res);
                    dispatch(profileFailture(res.data.message))
                }
            })
            .catch(err => {
                console.log('err', err);
                dispatch(profileFailture(err))
            })
    }
}
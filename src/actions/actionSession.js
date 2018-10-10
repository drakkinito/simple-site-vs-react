import { checkCradetials } from '../helpers/checkCradetials'

export function login(data, cb) {
    return dispatch => {
        if (checkCradetials(data)) {
            dispatch({ type: 'LOG_IN', payload: { user: data.username } })
            cb()
        } else {
            dispatch({
                type: 'LOG_IN_FAILURE',
                payload: { errorMsg: 'Имя пользователя или пароль введены не верно' }
            })
        }
    }
}
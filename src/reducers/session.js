import * as t from '../constants'

const initialState = {
    user: {
        id: localStorage.user ? localStorage.user : null
    },
    errorMsg: null,
    isLoading: false,
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case t.LOG_IN_REQUEST:
            return {
                ...state,
                errorMsg: null,
                isLoading: true,
            }
        case t.LOG_IN_SUCCESS:
            return { ...state, user: { id: payload.data.id }, isLoading: false }
        case t.LOG_OUT:
            return { ...state, user: { id: null }, errorMsg: null }
        case t.LOG_IN_FAILTURE:
            return { ...state, errorMsg: payload.errorMsg, isLoading: false }
        default:
            return state
    }
}
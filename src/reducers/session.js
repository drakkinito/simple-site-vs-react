import * as t from '../constants'

const initialState = {
    user: null,
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
            return { ...state, user: { name: payload.email } }
        case t.LOG_OUT:
            return { ...state, user: null, errorMsg: null }
        case t.LOG_IN_FAILTURE:
            console.log(payload);
            return { ...state, errorMsg: payload.errorMsg }
        default:
            return state
    }
}
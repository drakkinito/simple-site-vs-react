import * as t from '../constants'

const initialState = {
    user: null,
    isLoading: false,
    errorMsg: ''
}

export default (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case t.PROFILE_REQUEST: 
            return {...state, isLoading: true}
        case t.GET_PROFILE:
            return { ...state, user: payload, isLoading: false }
        case t.GET_PROFILE_ERROR:
            console.log('payload', payload);
            return { ...state, isLoading: false, errorMsg: payload }
        default:
            return state
    }
}

const initialState = {
    user: null,
    errorMsg: ''
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'LOG_IN':
            return { ...state, user: payload.user }
        case 'LOG_IN_FAILURE':
            return { ...state, errorMsg: payload.errorMsg }
        default:
            return state
    }
}
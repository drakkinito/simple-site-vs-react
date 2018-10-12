import { connect } from 'react-redux'
import Login from '../components/Login'

import { login } from '../actions/actionSession'

export default connect(state => ({
    errorMsg: state.session.errorMsg,
    isLoading: state.session.isLoading
}), { login })(Login)
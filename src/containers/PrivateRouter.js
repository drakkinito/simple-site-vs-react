import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return rest.isAuth ?
                    <Component {...props} /> :
                    <Redirect to={{
                        pathname: '/login', state: { from: props.location.pathname },
                    }} />
            }} />
    )
}

export default connect(state => ({
    isAuth: state.session.user
}))(PrivateRouter)
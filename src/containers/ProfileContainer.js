import React from 'react'
import { connect } from 'react-redux'

import Profile from '../components/Profile'

const ProfileContainer = ({ user }) => {
    return <Profile user={user} />
}

export default connect(state => ({
    user: state.session.user
}))(ProfileContainer)
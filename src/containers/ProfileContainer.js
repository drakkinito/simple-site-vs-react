import React from 'react'
import { connect } from 'react-redux'

import Profile from '../components/Profile'
import { getProfile } from '../actions/actionProfile'

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { getProfile, user: { id } } = this.props
        if (id !== null) { getProfile(id) }
    }
    render() {
        const { user, profile } = this.props
        return <Profile username={user} data={profile} />
    }
}

export default connect(state => ({
    user: state.session.user,
    profile: state.profile,
}), { getProfile })(ProfileContainer)
import React from 'react'
import { connect } from 'react-redux'


const Profile = ({ user }) => <h2>Profile: {user}</h2>

export default connect(state => ({
    user: state.session.user.name
}))(Profile)
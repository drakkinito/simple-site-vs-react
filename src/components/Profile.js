import React from 'react'

import ProfileContent from './ProfileContent'
import { Loader } from './ui/Loader'
import { ErrorMsg } from './ui/ErrorMsg'

const Profile = ({ username, data }) => {
    const { isLoading, user, errorMsg } = data

    return (
        <div>
            <h2>Профіль</h2>
            {isLoading && <Loader />}
            {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
            {user && <ProfileContent data={user} />}
        </div>
    )
}

export default Profile
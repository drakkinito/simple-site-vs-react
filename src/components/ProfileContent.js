import React from 'react'

import { imgs } from '../constants'

const ProfileContent = ({ data, msgError }) => {
    const { languages, city, social } = data
    return (
        <div className="profile-content">
            <h2>Місто: {data && city}</h2>
            <p>Знання мов:</p>
            {data &&
                languages.map((item, index) => <li key={index}>{item}</li>)
            }
            <p>Посилання:</p>
            <ul>
                {data && social.map(item =>
                    <li key={item.label}>
                        <a href={item.link}>
                            <img src={imgs[item.label]} alt={item.label} width="40" height="40" />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ProfileContent
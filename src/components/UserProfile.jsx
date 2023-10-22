import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export const UserProfile = () => {

    const userSlice = useSelector((state) => state.user);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {userSlice.username}</p>
            <p>Email: {userSlice.email}</p>
        </div>
    )
}


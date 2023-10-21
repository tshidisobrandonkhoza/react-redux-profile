import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
function UserProfile() {

    const userSlice = useSelector((state) => state.user);

    return (
        <div>
            <h1>User Details</h1>
            <p>Username: {userSlice.username}</p>
            <p>Email: {userSlice.email}</p>
        </div>
    )
}

export default UserProfile

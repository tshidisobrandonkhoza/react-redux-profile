import React from 'react'
import { useSelector } from 'react-redux';
import { UserForm } from './UserForm';
const UserCard = () => {
    const userSlice = useSelector((state) => state.user);

    return (
        <div>
            <p>
                Username: {userSlice.username}
            </p>
            <p>
                Email: {userSlice.email}
            </p>
            <UserForm />
        </div>
    )
}

export default UserCard

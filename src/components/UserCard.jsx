import React from 'react'
import { useSelector } from 'react-redux';
import { UserForm } from './UserForm';

import { UserProfile } from './UserProfile';
const UserCard = () => {
    const userSlice = useSelector((state) => state.user);

    return (
        <div>
            <UserProfile />
            <UserForm />
        </div>
    )
}

export default UserCard

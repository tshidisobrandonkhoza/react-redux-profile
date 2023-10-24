import React from 'react'
import { useSelector } from 'react-redux';
import { UserForm } from './UserForm';

import { UserProfile } from './UserProfile';
import { Post } from './Post';
const UserCard = () => {
    const userSlice = useSelector((state) => state.user);

    return (
        <div>
            <UserProfile />
            <UserForm />
            <Post />
        </div>
    )
}

export default UserCard

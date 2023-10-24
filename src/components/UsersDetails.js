import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, deleteUsers, loadingSet, updateUsers } from '../features/users/usersSlice';
import { fetchUsersThunk } from '../features/users/usersThunk';
import { useEffect } from 'react';
import userSlice from '../store/user/userSlice';

//useEffect(dispatch(fetchUsersThunk()));
function UsersDetails() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(loadingSet(true));
        setTimeout(() => {
            console.log('loaded time');
            dispatch(fetchUsersThunk());
        }, 5000);
    }, []);

    const usersSlice = useSelector(state => state.users);


    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const [upname, setUpname] = useState('');
    const [upusername, setUpusername] = useState('');

    return (
        <div>
            <h1>CRUD User Details <br />{`The Name: ${name} and Username: ${username}`}</h1>
            <div className='adding'>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} name='name' />
                <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} name='username' />
                <br />
                <button onClick={() => {
                    dispatch(addUsers(
                        {
                            id: usersSlice.value[usersSlice.value.length - 1].id + 1,
                            name,
                            username,
                        }
                    ))
                }}>Add User</button>
                {/* <button>Update User</button> */}
            </div>

            <div className='display'>

                {

                    usersSlice.loading ? <p>Loading...</p> : usersSlice.value.map(user => (

                        <div key={user.id}>
                            <p>{user.name} {user.username}</p>

                            <input type="text" placeholder='Name' onChange={(e) => setUpname(e.target.value)} />
                            <input type="text" placeholder='Username' onChange={(e) => setUpusername(e.target.value)} />

                            <button onClick={() => {
                                dispatch(updateUsers(
                                    {
                                        id: user.id,
                                        name: upname,
                                        username: upusername,
                                    }
                                ))
                            }}>Update User</button>

                            <button onClick={() => { dispatch(deleteUsers({ id: user.id })) }}>Delete User</button>
                        </div>
                    ))


                }

            </div>
        </div >
    )
}

export default UsersDetails

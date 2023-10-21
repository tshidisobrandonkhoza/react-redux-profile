import React from 'react'
import { useDispatch } from 'react-redux'
import { updateUsername, updateEmail } from '../store/user/userSlice'


export const UserForm = () => {
    const dispatch = useDispatch();

    function inputChanges(e) {
        let inpVal = e.target.value;
        switch (e.target.name) {
            case 'username':
                dispatch(updateUsername(inpVal));
                break;
            case 'email':
                dispatch(updateEmail(inpVal));
                break;

            default:
                break;
        }

    }

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' name='username' onChange={e => inputChanges(e)} />
                </div>
                <div>
                    <label htmlFor="email" >email</label>
                    <input type="email" id="email" name="email" onChange={e => inputChanges(e)} />
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

//export default UserForm

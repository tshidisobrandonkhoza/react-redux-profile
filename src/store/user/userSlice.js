import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 1,
    username: 'Brandon',
    email: 'brandon@gmail.com'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload
        },
        updateEmail: (state, action) => {
            state.email = action.payload
        }
    }
});

export default userSlice.reducer;
export const { updateUsername, updateEmail } = userSlice.actions;


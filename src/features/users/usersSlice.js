import { createSlice } from "@reduxjs/toolkit";
// import { UsersData } from '../../db/UsersData';
import { fetchUsersThunk } from "./usersThunk";


// const initialState = {
//     value: UsersData,
// }
const initialState = {
    value: [],
    loading: false,
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loadingSet: (state, action) => {
            state.loading = action.payload;
            console.log(action.payload);
        },
        addUsers: (state, action) => {
            state.value.push(action.payload);
        }, deleteUsers: (state, action) => {
            console.log(action.payload)
            state.value = state.value.filter(val => val.id !== action.payload.id);
        }, updateUsers: (state, action) => {
            state.value.map(val => {

                if (val.id === action.payload.id) {
                    val.name = action.payload.name;
                    val.username = action.payload.username;
                }
                return val;
            });


        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersThunk.pending, (state) => {
            state.loading = true;
        }).addCase(fetchUsersThunk.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload.data);
            state.value = action.payload.data
        }).addCase(fetchUsersThunk.rejected, (state) => {
            state.loading = false;
            console.log('false');
        });
    },
});

export default usersSlice.reducer;
export const { addUsers, deleteUsers, updateUsers, loadingSet } = usersSlice.actions;
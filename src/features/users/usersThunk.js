import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getUsers } from "../../store/utils/usersapi";
import { getData } from "../../store/utils/api";
export const fetchUsersThunk = createAsyncThunk('users/fetch',  () => {
    console.log('Inside users fetch Thunk');
    return   getData('users');
});

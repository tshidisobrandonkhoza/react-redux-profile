import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { getData } from "../../store/utils/api";
export const fetchUsersThunk = createAsyncThunk('users/fetch',  () => {
    console.log('Inside users fetch Thunk');
    return   getData('users');
});

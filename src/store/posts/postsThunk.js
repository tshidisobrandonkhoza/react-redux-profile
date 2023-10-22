import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../utils/api";

export const fetchPostsThunk = createAsyncThunk('posts/fetch', () => {
    console.log('Inside fetch Thunk');

    return getPosts();
});
 
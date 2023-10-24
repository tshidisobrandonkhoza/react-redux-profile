import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils/api";

export const fetchPostsThunk = createAsyncThunk('posts/fetch', () => {
    console.log('Inside fetch Thunk');
    return getData('posts');
});


// export const fetchPostsThunk = createAsyncThunk('post/getPost', async ({ id }) => {
//     return (`https://my-json-server.typicode.com/typicode/demo/posts`)
//         .then((res) => { res.json() });
// });
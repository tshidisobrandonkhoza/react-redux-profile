import { createSlice } from "@reduxjs/toolkit";
import { fetchPostsThunk } from "./postsThunk";

const initialState = {
    posts: [],
    loading: false,
};
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            console.log(`This is called now:${action.payload}`)
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostsThunk.pending, (state) => {
            state.loading = true
        }).addCase(fetchPostsThunk.fulfilled, (state, action) => {
            console.log('Fetch Post Fullfilled')
            console.log(action.payload.data);
            // update the state
            state.posts = action.payload.data;
            state.loading = false;
        }).addCase(fetchPostsThunk.rejected, (state) => {
            state.loading = false;
        });
    }
});

export default postsSlice.reducer;
export const { setLoading } = postsSlice.actions;
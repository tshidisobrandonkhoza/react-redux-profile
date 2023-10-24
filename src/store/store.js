import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import postsReducer from './posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        users: usersReducer
    },
    middleware:  (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
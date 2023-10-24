import React from 'react'
import { fetchPostsThunk } from "../store/posts/postsThunk";
import { setLoading } from "../store/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";


export const Post = () => {
    const dispatch = useDispatch();
    const postsSlice = useSelector(state => state.posts);
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => {
                dispatch(setLoading(true));
                dispatch(fetchPostsThunk())
            }}>Fetch Posts</button>

            {postsSlice.loading ? <div><span>Loading Posts..</span></div>
                : postsSlice.posts.map(post => {
                    return (
                        <div key={post.id}>
                            {/* <p>ID Title {post.id}</p>
                <br />
                <p>Post Title{post.title}</p> */}
                            {JSON.stringify(post)}
                        </div>)
                })
            }
        </div>
    )
}

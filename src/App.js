import { useDispatch, useSelector } from "react-redux";
import UserCard from "./components/UserCard";
import { fetchPostsThunk } from "./store/posts/postsThunk";
import { setLoading } from "./store/posts/postsSlice";


function App() {
  const dispatch = useDispatch();
  const postsSlice = useSelector(state => state.posts);
  return (
    <div className="App">
      <header className="App-header">

        <UserCard />

        <h1>Posts</h1>
        <button onClick={() => {
          dispatch(setLoading(true));
          dispatch(fetchPostsThunk())
        }}>Fetch Posts</button>

        {postsSlice.loading && (<div><span>Loading Posts..</span></div>)}
        {
          postsSlice.posts.map(post => {
            return (
              <div key={post.id}>
                {/* <p>ID Title {post.id}</p>
                <br />
                <p>Post Title{post.title}</p> */}
                {JSON.stringify(post)}
              </div>)
          })
        }
      </header>
    </div >
  );
}

export default App;

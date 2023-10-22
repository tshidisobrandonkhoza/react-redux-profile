import axios from 'axios';

export const getPosts = () =>
axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
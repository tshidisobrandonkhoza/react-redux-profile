import axios from 'axios';

//npx json-server -p 1000  -w ./src/db/database.json

export const getData = (code) =>
    axios.get(`http://localhost:1000/${code}`);



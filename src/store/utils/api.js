import axios from 'axios';

// npx json-server -p 4000  -w  ./src/data/db.json

export const getData = (code) =>
    axios.get(`http://localhost:1000/${code}`);



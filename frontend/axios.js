import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `http://localhost:8000/api/` ,
        // baseURL: `https://nom de domaine/api/`, 
})


import axios from "axios";

export const HTTP = axios.create({
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
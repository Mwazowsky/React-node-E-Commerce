import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTJlMzMyOGYxNWVjMGIxMjEyY2I3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjUxMDE2OSwiZXhwIjoxNjUyNzY5MzY5fQ.1fxyozrsmb3tHkkM92eSFsxx2ZtlQ5-zDYl5DVqfpCw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` },
    
});
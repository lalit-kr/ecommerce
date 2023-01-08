import axios from "axios";

const BASE_URL="http://localhost:4000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTQ4MzYyMGYyOWE5NDgwYmExNDEyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjM3NzAyMywiZXhwIjoxNjYyNjM2MjIzfQ.I-WU3E956LOlKClSIGfkWjxDDXTds4dQJRyHtOaT6m8";

export const publicRequest=axios.create({
    baseURL:BASE_URL
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});
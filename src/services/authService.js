import axios from "axios";
import Axios from "../interceptors/axiosInstance";
import Request from "../interceptors/Request";

const AuthService = new Request(Axios)

export const getAllUsers = () => {
    return AuthService.get('/users')
}

export const getAllPosts = () => {
    return AuthService.get('/posts', {}, { checkToken: false })
}

export const getPostById = (id) => {
    return AuthService.get(`/posts/${id}`, {}, { checkToken: false })
}



const LocalAxios = axios.create({
    baseURL: 'http://localhost:8000'
});
const LocalService = new Request(LocalAxios)

export const getLocalPosts = () => {
    return LocalService.get('/getposts', {}, { checkToken: false })
}
import Axios from "../interceptors/axiosInstance";
import Request from "../interceptors/Request";

const AuthService = new Request(Axios)

export const getAllUsers = () => {
    return AuthService.get('/users')
}

export const getAllPosts = () => {
    return AuthService.get('/posts')
}

export const getPostById = (id) => {
    return AuthService.get(`/posts/${id}`)
}
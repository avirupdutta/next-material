import Axios from "../interceptors/axiosInstance";
import Request from "../interceptors/Request";

const AuthService = new Request(Axios)

export const getAllUsers = () => {
    return AuthService.get('/users')
}
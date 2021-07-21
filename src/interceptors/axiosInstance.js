import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com/"

const Axios = axios.create({
    baseURL,
});
export default Axios;

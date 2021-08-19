import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const Axios = axios.create({
    baseURL,
});
export default Axios;

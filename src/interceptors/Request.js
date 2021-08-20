import { useStore } from '../redux';

const queryString = require('query-string');

const config = {
    checkToken: true,
    headers: {}
}



function Request(AxiosInstance) {
    const Axios = AxiosInstance;

    const getResponse = (data, error) => {
        return {
            data,
            error
        }
    }

    const getErrorResponse = (url, message, method, body) => {
        return getResponse(undefined, {
            url,
            message,
            method,
            body
        })
    }

    const makeRequestAsPerMethod = async (url, method, options, body, axiosOptions) => {
        let response = null;
        let authHeader = {};
        let token;

        try {
            const store = useStore(undefined, true).getState()
            if (options.checkToken) {
                if (store && store.auth && store.auth.token) {
                    token = store.auth.token;
                    authHeader = {
                        'Authorization': `Token ${token}`,
                    };
                }
                else {
                    const message = 'You have enabled token check for this API but token was not found! Make sure you have auth object with token field in your redux store.'
                    console.log("%c Token not found error:", 'background: #000; color: #edff4a', message);
                    return getErrorResponse(message, url, method, body)
                };
            }
            switch (method.toUpperCase()) {
                case "GET":
                    response = await Axios.get(url, {
                        headers: {
                            ...options.headers,
                            ...authHeader,
                        },
                    });
                    break;
                case "POST":
                    const { params } = body;
                    response = await Axios.post(url, body, {
                        ...axiosOptions,
                        headers: {
                            ...options.headers,
                            ...authHeader,
                        },
                        params,
                    });
                    break;
                case "PUT":
                    response = await Axios.put(url, body, {
                        ...axiosOptions,
                        headers: {
                            ...options.headers,
                            ...authHeader,
                        },
                    });
                    break;
                case "DELETE":
                    response = await Axios.delete(url, {
                        headers: {
                            ...options.headers,
                            ...authHeader,
                        },
                    });
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log("%c URL ERROR:", 'background: #000; color: #ff4a4a', `An error occured while requesting a url : ${url} \n Error: ${JSON.stringify(error.message)}`);
            return getErrorResponse(error.message, url, method, body)
        }
        finally {
            if (response) {
                return getResponse(response.data, undefined)
            }
        }
    }

    /**
     * 
     * @param {string} url  The API endpoint
     * @param {object} options { checkToken: true, headers: {} }
     * @returns Promise
     */
    this.get = async function (url, query = {}, options = config) {
        if (Object.keys(query).length > 0) {
            const newUrl = queryString.stringifyUrl({ url, query });
            return await makeRequestAsPerMethod(newUrl, 'GET', options)
        }
        return await makeRequestAsPerMethod(url, 'GET', options)
    }

    /**
     * 
     * @param {string} url  The API endpoint
     * @param {object} body The request body
     * @param {object} options { checkToken: true, headers: {}, axiosOptions: {} }
     * @returns Promise
     */
    this.post = function (url, body = {}, options = { ...config, axiosOptions: {} }) {
        return makeRequestAsPerMethod(url, 'POST', options, body, options.axiosOptions)
    }

    /**
     * 
     * @param {string} url  The API endpoint
     * @param {object} body The request body
     * @param {object} options { checkToken: true, headers: {}, axiosOptions: {} }
     * @returns Promise
     */
    this.put = function (url, body = {}, options = { ...config, axiosOptions: {} }) {
        return makeRequestAsPerMethod(url, 'PUT', options, body, options.axiosOptions)
    }


    /**
     * 
     * @param {string} url  The API endpoint
     * @param {object} options { checkToken: true, headers: {} }
     * @returns Promise
     */
    this.delete = async function (url, options = config) {
        return await makeRequestAsPerMethod(url, 'DELETE', options)
    }
}

export default Request
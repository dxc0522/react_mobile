import axios from 'axios';
let config = {
    baseURL: "https://www.easy-mock.com/mock/5be143629e70723fe9d8dc42/app/api",
    timeout: 60 * 1000, // Timeout
    withCredentials: false, // Check cross-site Access-Control
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // console.log(config)
        return config;
    },
    function (error) {

        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        return Promise.resolve(response.data);
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);


export default _axios;
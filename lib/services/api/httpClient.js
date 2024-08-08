import axios from 'axios';
import { getCookie, deleteCookie } from 'cookies-next';

const ErrorCodeMessages = {
    401: 'Invalid credentials',
    403: 'Access Forbidden',
    404: 'Resource or page not found',
};

const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add interceptor to include Authorization header with token
httpClient.interceptors.request.use((config) => {
    const token = getCookie('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    } else {
        // location.href = "/login";
        deleteCookie('token');
        deleteCookie('steps_data');
        deleteCookie('user_name');
        deleteCookie('user_profile');
    }
    return config
})

// Add response error handler
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status
        const errorMessage =
            status && ErrorCodeMessages[status]
                ? ErrorCodeMessages[status]
                : error.response?.data?.message || error.message || 'Unknown error'
        
        if (status === 401) {
            location.href = "/login";
            deleteCookie('token');
            deleteCookie('steps_data');
            deleteCookie('user_name');
            deleteCookie('user_profile');
        }

        return Promise.reject(errorMessage)
    }
)

export default httpClient;
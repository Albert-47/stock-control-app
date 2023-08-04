import axiosOriginal from 'axios';

const axios = axiosOriginal.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default axios;

import axios from 'axios';
import { config, baseURL } from '../baseInfo';

export const registerUser = async(values) => {
    try {
        const response = await axios.post(`${baseURL}/users`, values);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}


export const getDashboardDetail = () => {
    try {
        const response = axios.get(`${baseURL}/user/dashboard`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There appears to be an issue with your network connection");
    }
}
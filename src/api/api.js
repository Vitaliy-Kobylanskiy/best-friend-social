import axios from 'axios';

export const getUsersAPI = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    });
};

export const getProfileAPI = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
};

export const authMeAPI = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    });
};

export const remoteFriend = (userId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
            'API-KEY': '3bc172cf-5666-4285-98cc-02429c8f02fe'
        }
    });
};

export const addNewFriend = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': '3bc172cf-5666-4285-98cc-02429c8f02fe'
        }
    });
};

export const loginApi = (email, password, rememberMe = false) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, { email, password, rememberMe }, {
        withCredentials: true,
        headers: {
            'API-KEY': '3bc172cf-5666-4285-98cc-02429c8f02fe'
        }
    });
};

export const logoutApi = () => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
        withCredentials: true,
        headers: {
            'API-KEY': '3bc172cf-5666-4285-98cc-02429c8f02fe'
        }
    });
};

export const savePhotoAPI = (photoFile) => {
    const formData = new FormData();
    formData.append('image', photoFile);
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, formData, {
        withCredentials: true,
        headers: {
            'API-KEY': '3bc172cf-5666-4285-98cc-02429c8f02fe'
        }
    });
};

export const saveProfileAPI = (profile) => {
    return axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, profile, {
        withCredentials: true,
        headers: {
            'API-KEY': '3bc172cf-5666-4285-98cc-02429c8f02fe'
        }
    });
};












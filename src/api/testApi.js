import axiosInstance from "./index.js";

export function getUserWithQueryParam(id) {
    return axiosInstance.get('/api/user', {
        params: {
            id: id
        }
    });
}

export function getUserWithPathParam(id) {
    return axiosInstance.get(`/api/user/${id}`);
}

export function createUser(name) {
    return axiosInstance.post('/api/user', {
        name: name
    });
}

export function createUserAdvanced(headerContentType) {
    return axiosInstance.post('/api/user/advanced', {}, {
        headers: {
            'Content-Type': headerContentType
        }
    });
}
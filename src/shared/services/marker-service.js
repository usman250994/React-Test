import API from './api-config';

export const getAllMarkers = () => {
    return API.get(`/locations`)
        .then(res => res.data);
}

export const addMarker = (body) => {
    return API.post(`/location`, body)
        .then(res => res.data);
}

export const updateMarkerbyId = (id, body) => {
    return API.put(`/location/`+id, body)
        .then(res => res.data);
}

export const deleteMarkerById = (id) => {
    return API.delete(`/location/`+id)
        .then(res => res);
}
const config = require('../../config/config');
const axios = require('../../config/axios');
const headers = require('../headers/headers')

class ApiService {
    addImage(data) {
        return axios.post(`${config}/streams/image`, data);
    }
    getImage(filename) {
        return axios.get(`${config}/streams/image/${filename}`, headers.image());
    }
}

module.exports = new ApiService();
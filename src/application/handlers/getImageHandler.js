const apiService = require('../../infrastructure/http/storageClient/apiService')

const getImageHandler = (data) => {
    return apiService.getImage(data.params.filename)
}

module.exports = getImageHandler;
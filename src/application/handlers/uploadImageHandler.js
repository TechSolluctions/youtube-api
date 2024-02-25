const apiService = require('../../infrastructure/http/storageClient/apiService')

const uploadImageHandler = (data) => {
    apiService.addImage(data.body)
}

module.exports = uploadImageHandler;
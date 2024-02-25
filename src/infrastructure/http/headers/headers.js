class Headers {
    image() {
        return {
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'image/png'
            }
        }
    }
}

module.exports = new Headers();
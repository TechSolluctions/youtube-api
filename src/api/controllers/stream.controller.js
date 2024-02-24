class StreamController {
    uploadVideo(req, res) {
        res.send('teste pipeline')
    }
}

module.exports = new StreamController();
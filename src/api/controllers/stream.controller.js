const uploadImageHandler = require("../../application/handlers/uploadImageHandler");
const getImageHandler = require("../../application/handlers/getImageHandler");

class StreamController {
    uploadImage(req, res) {
        uploadImageHandler(req)
        res.status(200).send();
    }
    async getImage(req, res) {
        try {
            const result = await getImageHandler(req)
            res.setHeader('Content-Type', 'image/png');
            res.status(200).send(result.data);
        } catch (err) {
            res.status(400).send({
                error: `Houve um erro ao processar a requisição.`,
                stack: err.stack,
                message: err.message
            })
        }
    }
}

module.exports = new StreamController();
const express = require('express');
const streamController = require('./src/api/controllers/stream.controller');
const bodyParser = require('body-parser');
const app = express();
const ENV = process.env.NODE_ENV;
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/v1/streams/image', streamController.uploadImage)
app.get('/api/v1/streams/image/:filename', streamController.getImage)

app.listen(PORT, () => {
    console.log(`Server ${ENV} is running on port ${PORT}`)
})
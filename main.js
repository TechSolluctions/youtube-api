const express = require('express');
const streamController = require('./src/api/controllers/stream.controller');
const app = express();
const ENV = process.env.NODE_ENV;
const PORT = 3000;

app.get('/', (req, res) => res.send('ok'))

app.post('/api/v1/streams', streamController.uploadVideo)

app.listen(PORT, () => {
    console.log(`Server ${ENV} is running on port ${PORT}`)
})
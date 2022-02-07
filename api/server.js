// BUILD YOUR SERVER HERE

const express = require('express');
const users = require('./users/model');
const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.json('Resting server get')
})

module.exports = server; // EXPORT YOUR SERVER instead of {}

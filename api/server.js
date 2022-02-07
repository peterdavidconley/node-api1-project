// BUILD YOUR SERVER HERE

const express = require('express');
const users = require('./users/model');
const server = express();

server.use(express.json())

// When the client makes a `POST` request to `/api/users`:

server.post('/api/users', (req, res) => {
    console.log('POST request')
})

// When the client makes a `GET` request to `/api/users`

server.get('/api/users', (req, res) => {
    res.json('GET request for all users')
})

// When the client makes a `GET` request to `/api/users/:id`

server.get('/api/users/:id', (req, res) => {
    res.json('GET request for user by id')
})

// When the client makes a `DELETE` request to `/api/users/:id`:

server.delete('/api/users/:id', (req, res) => {
    res.json('Delete request for specific user')
})

// When the client makes a `PUT` request to `/api/users/:id`:

server.put('/api/users/:id', (req, res) => {
    res.json('Update specific user')
})

module.exports = server; // EXPORT YOUR SERVER instead of {}

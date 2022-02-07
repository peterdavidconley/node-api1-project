// BUILD YOUR SERVER HERE

const express = require('express');
const usersModel = require('./users/model');
const server = express();

server.use(express.json())

// When the client makes a `POST` request to `/api/users`:

server.post('/api/users', (req, res) => {
    let body = req.body
    if (!body.name) {
        res.status(400).json({ message: 'Please provide name and bio for the user'})
    } else if (!body.bio) {
        res.status(400).json({ message: 'Please provide name and bio for the user'})
    } else {
        usersModel.insert(body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({
                message: 'There was an error while saving the user to the database'
            })
        })
    }

})

// When the client makes a `GET` request to `/api/users`

server.get('/api/users', (req, res) => {
    usersModel.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
            message: 'The users information could not be retrieved'
        })
    })
})

// When the client makes a `GET` request to `/api/users/:id`

server.get('/api/users/:id', (req, res) => {

    const { id } = req.params
    usersModel.findById(id)
    .then(user => {
        if (!user) {
            res.status(404).json({
                message: 'The user with the specified ID does not exist'
            })
        } else {
            res.json(user)
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'The user information could not be retrieved'
        })
    })
})

// When the client makes a `DELETE` request to `/api/users/:id`:

server.delete('/api/users/:id', (req, res) => {
    let { id } = req.params
    usersModel.remove(id)
    .then(user => {
        if (!user) {
            res.status(404).json({
                message: 'The user with the specified ID does not exist'
            })
        } else {
            res.status(200).json(user)    
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'The user could not be removed'
        })
    })
})

// When the client makes a `PUT` request to `/api/users/:id`:

server.put('/api/users/:id', (req, res) => {
    res.json('Update specific user')
})

module.exports = server; // EXPORT YOUR SERVER instead of {}

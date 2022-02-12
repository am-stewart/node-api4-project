const express = require('express');
const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'joe' },
        { id: 2, username: 'john' },
        { id: 3, username: 'james' },
    ])
})

server.get('/',  (req, res) => {
    res.send(`<h2> Let's go! </h2>`)
})

module.exports = server;
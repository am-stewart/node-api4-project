require('dotenv').config();
// const express = require('express');

const server = require('./api/server.js');

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
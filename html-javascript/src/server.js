const express = require('express');
const server = express();
const router = require('./router');
const port = process.env.PORT || 3000;
const path = require('path');

server.use(router)
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, './views'));
server.use(express.static("public"));

server.use(express.urlencoded({extended: true}))

server.listen(
    port, () =>
    console.log(`Rodando: http://localhost:${port}`)
)
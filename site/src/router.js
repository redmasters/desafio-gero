const { render } = require('ejs');
const express = require('express');
const ListaController = require('./controllers/ListController');
const router = express.Router()

router.get('/', (req, res) => res.render("index", {page: 'hospedes'}))
router.get('/', ListaController.list)

module.exports = router
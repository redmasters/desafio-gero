const express = require('express');
const ListController = require('./controllers/ListController');
const router = express.Router()

// router.get('/', (req, res) => res.render("index"));
router.get('/', ListController.list);

module.exports = router
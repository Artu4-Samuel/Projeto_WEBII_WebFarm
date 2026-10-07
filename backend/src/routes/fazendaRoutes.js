const express = require('express');
const router = express.Router();
const FazendaController = require('../controllers/FazendaController');

router.post('/', FazendaController.cadastrar);

module.exports = router;
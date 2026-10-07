const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/VeiculoController');
router.post('/', VeiculoController.cadastrar);

module.exports = router;
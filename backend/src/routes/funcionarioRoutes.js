const express = require('express');
const router = express.Router();
const FuncionariosController = require('../controllers/FuncionariosController');

router.post('/', FuncionariosController.cadastrar);

module.exports = router;
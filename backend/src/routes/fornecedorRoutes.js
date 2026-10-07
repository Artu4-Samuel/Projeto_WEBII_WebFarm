const express = require('express')
const FornecedorService = require('../services/FornecedorService');
const FornecedorController = require('../controllers/FornecedorController');

router.post('/', FornecedorController.cadastrar)
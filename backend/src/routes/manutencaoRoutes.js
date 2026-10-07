const express = require('express');
const router = express.Router();
const ManutencaoController = require('../controllers/ManutencaoController');

router.post('/', ManutencaoController.cadastrar);

module.exports = router;
const express = require('express');
const router = express.Router();
const ProducaoAgricolaController = require('../controllers/ProducaoAgricolaController');

router.post('/', ProducaoAgricolaController.cadastrar);

module.exports = router;
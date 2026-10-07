const express = require('express');
const router = express.Router();
const ProdutorRuralController = require('../controllers/ProdutorRuralController');

router.post('/', ProdutorRuralController.cadastrar);

module.exports = router;
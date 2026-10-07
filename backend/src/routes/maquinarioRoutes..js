const express = require('express');
const router = express.Router();
const MaquinarioController = require('../controllers/MaquinarioController');

router.post('/', MaquinarioController.cadastrar);

module.exports = router;
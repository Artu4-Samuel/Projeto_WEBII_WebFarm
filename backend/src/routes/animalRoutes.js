const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');

router.post('/', AnimalController.cadastrar);

module.exports = router;
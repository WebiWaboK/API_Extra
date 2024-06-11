const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');

router.post('/calculate', bmiController.calculate);

module.exports = router;

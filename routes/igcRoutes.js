const express = require('express');
const router = express.Router();
const igcController = require('../controllers/igcController');
const protect = require('../middlewares/protect');

router.post('/calculate', protect, igcController.calculateIGC);

module.exports = router;

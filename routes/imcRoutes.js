const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');
const { protect } = require('../middlewares/protect');

router.post('/calculate', protect, bmiController.calculate);

module.exports = router;

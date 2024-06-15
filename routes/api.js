const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');
const authRoutes = require('./authRoutes');

router.post('/calculate', bmiController.calculate);
router.post('/bmi/calculate', bmiController.calculate);

const userRoutes = require('./user');
router.use('/users', userRoutes);

router.use('/auth', authRoutes);

module.exports = router;

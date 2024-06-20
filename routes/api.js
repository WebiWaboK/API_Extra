const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');
const authRoutes = require('./authRoutes');
const igcRoutes = require('./igcRoutes');

router.post('/calculate', bmiController.calculate);
router.post('/bmi/calculate', bmiController.calculate);
router.use('/igc', igcRoutes);

const userRoutes = require('./user');
router.use('/users', userRoutes);

router.use('/auth', authRoutes);

module.exports = router;

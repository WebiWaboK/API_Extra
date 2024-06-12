const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');

router.post('/calculate', bmiController.calculate);

const userRoutes = require('./user');
router.use('/users', userRoutes);

module.exports = router;

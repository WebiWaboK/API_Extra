const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');
const igcController = require('../controllers/igcController');
const { protect } = require('../middlewares/protect');
const dataController = require('../controllers/dataController');
const authRoutes = require('./authRoutes');
const userRoutes = require('./user');

// Rutas de BMI
router.post('/bmi/calculate', protect, bmiController.calculate); // Asegúrate de que la ruta esté protegida

// Rutas de IGC
router.post('/igc/calculate', protect, igcController.calculateIGC);

// Rutas de autenticación
router.use('/auth', authRoutes);

router.get('/data', protect, dataController.getData);

// Rutas de usuario
router.use('/users', userRoutes);

module.exports = router;

const bmiService = require('../services/bmiService');

exports.calculate = async (req, res) => {
  try {
    console.log('req.user:', req.user); // Log para verificar req.user

    if (!req.user) {
      console.log('Usuario no autenticado');
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    const { weight, height } = req.body;
    const userId = req.user.id; // Obtener el ID del usuario logueado

    if (!userId || !weight || !height) {
      console.error('ID de usuario, peso y altura son requeridos');
      throw new Error('ID de usuario, peso y altura son requeridos');
    }

    console.log('Datos recibidos:', { userId, weight, height });
    const result = await bmiService.calculateBMI(userId, weight, height);
    console.log('Resultado del BMI:', result);
    res.json(result);
  } catch (error) {
    console.error('Error al calcular el BMI:', error.message);
    res.status(500).json({ error: error.message || 'Error al calcular el BMI' });
  }
};

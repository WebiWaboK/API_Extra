const igcService = require('../services/igcService');

exports.calculateIGC = async (req, res) => {
  try {
    console.log('req.user:', req.user); // Log para verificar req.user
    if (!req.user) {
      console.log('Usuario no autenticado');
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }

    const { weight, waist, hip, neck, height, gender } = req.body;
    const userId = req.user.id; // Obtener el ID del usuario logueado

    if (!userId || !weight || !waist || !hip || !neck || !height || !gender) {
      console.error('Todos los campos son obligatorios');
      throw new Error('Todos los campos son obligatorios');
    }

    console.log('Datos recibidos:', { userId, weight, waist, hip, neck, height, gender });
    const result = await igcService.calculateIGC(userId, weight, waist, hip, neck, height, gender);
    console.log('Resultado del IGC:', result);
    res.json(result);
  } catch (error) {
    console.error('Error en el cálculo de IGC:', error.message);
    res.status(400).json({ error: error.message });
  }
};

const igcService = require('../services/igcService');

exports.calculateIGC = async (req, res) => {
  try {
    const { waist, hip, neck, height, gender } = req.body;

    if (!waist || !hip || !neck || !height || !gender) {
      throw new Error('Todos los campos son obligatorios');
    }

    const result = igcService.calculateIGC(waist, hip, neck, height, gender);
    res.json(result);
  } catch (error) {
    console.error('Error en el cálculo de IGC:', error.message);
    res.status(400).json({ error: error.message });
  }
};

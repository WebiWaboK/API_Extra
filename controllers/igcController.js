const igcService = require('../services/igcService');

exports.calculateIGC = async (req, res) => {
  try {
    const { waist, hip, neck, height, gender } = req.body;
    const result = igcService.calculateIGC(waist, hip, neck, height, gender);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

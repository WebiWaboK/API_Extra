const bmiService = require('../services/bmiService');

exports.calculate = (req, res) => {
  try {
    const { weight, height } = req.body;
    if (!weight || !height) {
      console.error('Weight and height are required');
      throw new Error('Weight and height are required');
    }
    console.log('Weight:', weight, 'Height:', height);
    const result = bmiService.calculateBMI(weight, height);
    console.log('Result:', result);
    res.json(result);
  } catch (error) {
    console.error('Error calculating BMI:', error.message);
    res.status(500).json({ error: error.message || 'Error calculating BMI' });
  }
};

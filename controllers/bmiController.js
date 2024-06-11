const bmiService = require('../services/bmiService');

exports.calculate = (req, res) => {
  const { weight, height } = req.body;
  const result = bmiService.calculateBMI(weight, height);
  res.json(result);
};

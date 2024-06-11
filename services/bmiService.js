const BMI = require('../models/bmi');

class BMIService {
  calculateBMI(weight, height) {
    const bmiModel = new BMI(weight, height);
    const bmi = bmiModel.calculateBMI();
    const category = bmiModel.getCategory(bmi);
    const recommendations = bmiModel.getRecommendations(category);

    return { bmi, category, recommendations };
  }
}

module.exports = new BMIService();

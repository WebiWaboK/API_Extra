const db = require('../config/database');
const BMI = require('../models/bmi');

class BMIService {
  async calculateBMI(userId, weight, height) {
    const bmiModel = new BMI(weight, height);
    let bmi = bmiModel.calculateBMI();
    bmi = parseFloat(bmi.toFixed(1)); // Limitar a 1 decimal
    const category = bmiModel.getCategory(bmi);
    const recommendations = bmiModel.getRecommendations(category);

    const query = 'INSERT INTO bmi_entries (user_id, weight, height, bmi, category, recommendations) VALUES (?, ?, ?, ?, ?, ?)';
    await db.query(query, [userId, weight, height, bmi, category, recommendations]);

    return { bmi, category, recommendations };
  }
}

module.exports = new BMIService();

const db = require('../config/database');
const IGC = require('../models/igc');

class IGCService {
  async calculateIGC(userId, weight, waist, hip, neck, height, gender) {
    const igcModel = new IGC();
    const igc = igcModel.calculateIGC(waist, hip, neck, height, gender); // Ya no es necesario usar toFixed aquí
    const category = igcModel.getCategory(igc, gender);
    const recommendations = igcModel.getRecommendations(category);

    const query = 'INSERT INTO igc_entries (user_id, weight, waist, hip, neck, height, gender, igc, category, recommendations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    await db.query(query, [userId, weight, waist, hip, neck, height, gender, igc, category, recommendations]);

    return { igc, category, recommendations };
  }
}

module.exports = new IGCService();

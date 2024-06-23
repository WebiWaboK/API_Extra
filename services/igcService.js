const IGC = require('../models/igc');

class IGCService {
  constructor() {
    this.igcModel = new IGC();
  }

  calculateIGC(waist, hip, neck, height, gender) {
    const igc = this.igcModel.calculateIGC(waist, hip, neck, height, gender);
    const category = this.igcModel.getCategory(igc, gender);
    const recommendations = this.igcModel.getRecommendations(category);
    return { igc, category, recommendations };
  }
}

module.exports = new IGCService();

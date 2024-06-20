class IGCService {
    calculateIGC(waist, hip, neck, height, gender) {
      // Fórmulas para calcular el IGC
      let igc;
      if (gender === 'male') {
        igc = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
      } else if (gender === 'female') {
        igc = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
      }
  
      // Categorías según el IGC
      let category;
      if (gender === 'male') {
        if (igc < 6) category = 'Esencial para la vida';
        else if (igc < 14) category = 'Atletas';
        else if (igc < 18) category = 'Fitness';
        else if (igc < 25) category = 'Aceptable';
        else category = 'Obesidad';
      } else {
        if (igc < 14) category = 'Esencial para la vida';
        else if (igc < 21) category = 'Atletas';
        else if (igc < 25) category = 'Fitness';
        else if (igc < 32) category = 'Aceptable';
        else category = 'Obesidad';
      }
  
      return { igc: igc.toFixed(2), category };
    }
  }
  
  module.exports = new IGCService();
  
class IGC {
    calculateIGC(waist, hip, neck, height, gender) {
      let igc;
      if (gender === 'male') {
        igc = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
      } else {
        igc = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
      }
      return igc.toFixed(2);
    }
  
    getCategory(igc, gender) {
      if (gender === 'male') {
        if (igc < 6) return 'Esencial para la vida';
        if (igc <= 13) return 'Atletas';
        if (igc <= 17) return 'Fitness';
        if (igc <= 24) return 'Aceptable';
        return 'Obesidad';
      } else {
        if (igc < 10) return 'Esencial para la vida';
        if (igc <= 20) return 'Atletas';
        if (igc <= 24) return 'Fitness';
        if (igc <= 31) return 'Aceptable';
        return 'Obesidad';
      }
    }
  
    getRecommendations(category) {
      switch (category) {
        case 'Esencial para la vida':
          return 'Mantén una dieta equilibrada y asegúrate de consumir suficientes calorías para mantener tu peso.';
        case 'Atletas':
          return 'Continúa con tu régimen de entrenamiento y asegúrate de mantener una dieta adecuada para tu nivel de actividad.';
        case 'Fitness':
          return 'Sigue entrenando regularmente y mantén una dieta equilibrada para mantener tu condición física.';
        case 'Aceptable':
          return 'Mantén un estilo de vida saludable y considera aumentar tu actividad física para mejorar tu condición física.';
        case 'Obesidad':
          return 'Consulta a un profesional de la salud para obtener asesoramiento sobre cómo reducir tu porcentaje de grasa corporal de manera segura.';
        default:
          return '';
      }
    }
  }
  
  module.exports = IGC;
  
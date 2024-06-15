class BMI {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  calculateBMI() {
    const heightInMeters = this.height / 100;
    return this.weight / (heightInMeters * heightInMeters);
  }

  getCategory(bmi) {
    if (bmi < 18.5) return 'Bajo peso';
    if (bmi < 25) return 'Peso normal';
    if (bmi < 30) return 'Sobrepeso';
    return 'Obesidad';
  }

  getRecommendations(category) {
    const recommendations = {
      'Bajo peso': 'Para aumentar de peso de forma saludable, consume alimentos ricos en nutrientes, come más calorías de las que quemas, y practica ejercicios de fuerza.',
      'Peso normal': 'Para mantener un peso saludable, sigue una dieta equilibrada, realiza actividad física regularmente, y mantén un estilo de vida activo.',
      'Sobrepeso': 'Para perder peso de forma saludable, reduce la ingesta calórica, aumenta la actividad física y el ejercicio, y considera consultar a un profesional de la salud.',
      'Obesidad': 'Para perder peso de forma saludable, reduce significativamente la ingesta calórica, aumenta la actividad física y el ejercicio, y consulta a un profesional de la salud para un plan de pérdida de peso.'
    };
    return recommendations[category];
  }
}

module.exports = BMI;

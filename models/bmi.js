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
      if (bmi < 18.5) {
        return 'Bajo peso';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Peso normal';
      } else if (bmi >= 25 && bmi < 30) {
        return 'Sobrepeso';
      } else {
        return 'Obesidad';
      }
    }
  
    getRecommendations(category) {
      switch (category) {
        case 'Bajo peso':
          return 'Sugerencias para aumentar de peso de forma saludable: aumentar la ingesta calórica, consumir alimentos ricos en nutrientes.';
        case 'Peso normal':
          return 'Consejos para mantener un peso saludable: seguir una dieta equilibrada, realizar actividad física regular.';
        case 'Sobrepeso':
          return 'Recomendaciones para perder peso de forma gradual y segura: reducir la ingesta calórica, aumentar la actividad física.';
        case 'Obesidad':
          return 'Asesoramiento para buscar ayuda profesional y desarrollar un plan de pérdida de peso adecuado.';
        default:
          return '';
      }
    }
  }
  
  module.exports = BMI;
  
class BMI {
    constructor(weight, height) {
      this.weight = weight;
      this.height = height;
    }
  
    calculateBMI() {
      const heightInMeters = this.height / 100;
      const bmi = this.weight / (heightInMeters * heightInMeters);
      return bmi.toFixed(1); // Redondea a un decimal
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
          return 'Para aumentar de peso de forma saludable, consume más calorías de las que gastas, enfocándote en alimentos nutritivos y calóricos. Incluye proteínas magras como carnes, pescado y legumbres, grasas saludables como aguacate y nueces, y carbohidratos complejos como granos enteros y papas. Come con mayor frecuencia, añade snacks entre comidas, y complementa tu dieta con ejercicios de resistencia para ganar masa muscular. Mantén una hidratación adecuada y duerme bien para apoyar el crecimiento muscular y la recuperación.';
        case 'Peso normal':
          return 'Para mantener un peso saludable, sigue una dieta balanceada rica en frutas, verduras, proteínas magras, granos enteros y grasas saludables, controlando las porciones y evitando alimentos procesados. Mantén una rutina regular de actividad física, incluyendo ejercicios aeróbicos y de resistencia. Bebe suficiente agua, duerme entre 7 y 9 horas por noche, y controla el estrés mediante técnicas de relajación. Monitorea tu peso y ajusta tus hábitos según sea necesario, buscando apoyo profesional si es necesario y manteniendo una actitud consistente y positiva.';
        case 'Sobrepeso':
          return 'Para perder peso de forma gradual y segura, establece metas realistas, sigue una dieta balanceada, y aumenta tu actividad física con ejercicios de cardio y fuerza. Mantente hidratado, adopta hábitos alimenticios saludables, duerme bien, controla el estrés, y monitorea tu progreso. Busca apoyo profesional y de tu entorno, y mantén una actitud paciente y persistente para lograr resultados sostenibles y mejorar tu bienestar general.';
        case 'Obesidad':
          return 'Para una persona con obesidad, es crucial buscar ayuda profesional de un médico, nutricionista o dietista que pueda evaluar su salud y crear un plan de pérdida de peso personalizado. Este plan debe incluir una dieta equilibrada, un régimen de ejercicio adecuado, y estrategias para manejar el estrés y mejorar el sueño. El seguimiento regular con el profesional ayudará a ajustar el plan según sea necesario y garantizará un enfoque seguro y efectivo para alcanzar un peso saludable.';
        default:
          return '';
      }
    }
  }
  
  module.exports = BMI;
  
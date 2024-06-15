const BMI = require('../models/bmi');

class BMIService {
  calculateBMI(weight, height) {
    const bmiModel = new BMI(weight, height);
    const bmi = parseFloat(bmiModel.calculateBMI().toFixed(1));
    const category = bmiModel.getCategory(bmi);
    const recommendations = bmiModel.getRecommendations(category);
    const chartData = this.getChartData(bmi);

    return { bmi, category, recommendations, chartData };
  }

  getChartData(bmi) {
    return {
      labels: ['Bajo peso', 'Peso normal', 'Sobrepeso', 'Obesidad'],
      datasets: [
        {
          label: 'Rango de IMC',
          data: [18.5, 25, 30],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false
        },
        {
          label: 'Tu IMC',
          data: [bmi],
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          pointRadius: 10,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          fill: false
        }
      ]
    };
  }
}

module.exports = new BMIService();

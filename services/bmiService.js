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
      labels: ['15', '18.5', '25', '30'],
      datasets: [
        {
          label: 'Rango de IMC',
          data: [
            { x: 15, y: 0 },
            { x: 18.5, y: 0 },
            { x: 25, y: 0 },
            { x: 30, y: 0 }
          ],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          showLine: true
        },
        {
          label: 'Tu IMC',
          data: [{ x: bmi, y: 0 }],
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

const dataService = require('../services/dataService');

exports.getData = async (req, res) => {
  const userId = req.user.id;

  try {
    const { bmiData, igcData } = await dataService.getData(userId);

    res.json({ bmiData, igcData });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};

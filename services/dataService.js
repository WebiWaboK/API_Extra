const db = require('../config/database');

class DataService {
  async getData(userId) {
    const [bmiRows] = await db.query('SELECT * FROM bmi_entries WHERE user_id = ?', [userId]);
    const [igcRows] = await db.query('SELECT * FROM igc_entries WHERE user_id = ?', [userId]);

    return { bmiData: bmiRows, igcData: igcRows };
  }
}

module.exports = new DataService();

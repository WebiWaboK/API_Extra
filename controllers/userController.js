const userService = require('../services/userService');

exports.register = async (req, res) => {
  console.log('API Register request body:', req.body);
  try {
    const { username, email, password, confirmPassword } = req.body;
    const userId = await userService.register(username, email, password, confirmPassword);
    console.log('API Registration userId:', userId);
    res.json({ userId });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  console.log('API Login request body:', req.body);
  try {
    const { username, password } = req.body;
    const { user, token } = await userService.login(username, password);
    console.log('API Login response:', { user, token });
    res.json({ user, token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(400).json({ error: error.message });
  }
};

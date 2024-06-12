const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

class UserService {
  async register(username, email, password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }
    const user = await User.create(username, email, password);
    return user;
  }

  async login(username, password) {
    const user = await User.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    const isValid = await User.validatePassword(password, user.password);
    if (!isValid) {
      throw new Error('Invalid password');
    }
    const token = generateToken({ id: user.id, username: user.username });
    return { user, token };
  }
}

module.exports = new UserService();

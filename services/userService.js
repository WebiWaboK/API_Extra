const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

exports.register = async (username, email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    throw new Error('Las contraseñas no coinciden');
  }

  const existingUser = await User.findByUsername(username);
  if (existingUser) {
    throw new Error('El usuario ya existe');
  }

  const userId = await User.create(username, email, password);
  return userId;
};

exports.login = async (username, password) => {
  const user = await User.findByUsername(username);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const passwordMatch = await User.validatePassword(password, user.password);
  if (!passwordMatch) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });

  return { user, token };
};

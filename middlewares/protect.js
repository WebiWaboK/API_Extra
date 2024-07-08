const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Auth Header:', authHeader); // Log para verificar el encabezado de autorización

  const token = authHeader && authHeader.split(' ')[1];
  console.log('Token:', token); // Log para verificar el token

  if (!token) {
    console.log('No se proporcionó token');
    return res.status(401).json({ error: 'No se proporcionó token' });
  }

  try {
    const decoded = verifyToken(token);
    console.log('Token decodificado:', decoded); // Log para depuración
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error de verificación de JWT:', error);
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = { generateToken, verifyToken, protect };

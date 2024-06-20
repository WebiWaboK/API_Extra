const { verifyToken } = require('../utils/jwt'); // Asegúrate de que la ruta sea correcta

module.exports = (req, res, next) => {
  const token = req.cookies.jwt; // O puedes obtener el token de los headers
  console.log('JWT Token:', token); // Log del token JWT
  if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      res.locals.user = req.user;
      console.log('Session User:', req.user); // Log del usuario en sesión
    } catch (error) {
      console.error('JWT Verification Error:', error); // Log del error de verificación JWT
      res.clearCookie('jwt');
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }
  } else {
    return res.status(401).json({ error: 'No se proporcionó token' });
  }
  next();
};

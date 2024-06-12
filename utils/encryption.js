const crypto = require('crypto');

// AES Encryption
const aesEncrypt = (text, secretKey) => {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const aesDecrypt = (encrypted, secretKey) => {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

// RSA Encryption
const generateKeyPair = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });
  return { publicKey, privateKey };
};

const rsaEncrypt = (text, publicKey) => {
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(text));
  return encrypted.toString('base64');
};

const rsaDecrypt = (encrypted, privateKey) => {
  const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encrypted, 'base64'));
  return decrypted.toString('utf8');
};

module.exports = {
  aesEncrypt,
  aesDecrypt,
  generateKeyPair,
  rsaEncrypt,
  rsaDecrypt,
};

const crypto = require('crypto');
const NodeRSA = require('node-rsa');
const { publicKey, privateKey } = require('./keys');

const ALGORITHM = 'aes-256-cbc';
const KEY = crypto.randomBytes(32);
const IV = crypto.randomBytes(16);

const rsaKey = new NodeRSA();
rsaKey.importKey(publicKey, 'public');
rsaKey.importKey(privateKey, 'private');

const encryptAES = (text) => {
  let cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(KEY), IV);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: IV.toString('hex'), encryptedData: encrypted.toString('hex') };
};

const decryptAES = (text) => {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(KEY), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

const encryptRSA = (text) => {
  return rsaKey.encrypt(text, 'base64');
};

const decryptRSA = (text) => {
  return rsaKey.decrypt(text, 'utf8');
};

module.exports = {
  encryptAES,
  decryptAES,
  encryptRSA,
  decryptRSA,
  KEY,
  IV
};

const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });
const privateKey = key.exportKey('private');
const publicKey = key.exportKey('public');

module.exports = {
  privateKey,
  publicKey
};

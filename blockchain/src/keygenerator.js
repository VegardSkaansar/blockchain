const EC = require('elliptic').ec;
const e = new EC('secp256k1');

const key = e.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log('Priavte Key: ', privateKey);

console.log();
console.log('Public key: ', publicKey);
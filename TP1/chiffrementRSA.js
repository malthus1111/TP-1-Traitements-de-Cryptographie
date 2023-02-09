const crypto = require('crypto');

// Fonction pour chiffrer le texte en entrée
function encrypt(text, key) {
  let buffer = new Buffer.from(text);
  let encrypted = crypto.publicEncrypt(key, buffer);
  return encrypted.toString('base64');
}

// Fonction pour déchiffrer le texte en entrée
function decrypt(text, key) {
  let buffer = new Buffer.from(text, 'base64');
  let decrypted = crypto.privateDecrypt(key, buffer);
  return decrypted.toString('utf8');
}

// Génération des clés publique et privée
let keys = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  }
});

// Texte en entrée
let text = "test de chiffrement RSA";

// Chiffrement du texte
let encryptedText = encrypt(text, keys.publicKey);

// Déchiffrement du texte
let decryptedText = decrypt(encryptedText, keys.privateKey);

console.log("Texte original: ", text);
console.log("Texte chiffré: ", encryptedText);
console.log("Texte déchiffré: ", decryptedText);

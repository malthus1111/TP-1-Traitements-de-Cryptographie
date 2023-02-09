const crypto = require('crypto');

function sha256(data) {
  return crypto
    .createHash('sha256')
    .update(data, 'utf8')
    .digest('hex');
}

const message = 'message test';
const hash = sha256(message);

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

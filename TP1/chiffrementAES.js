const CryptoJS = require("crypto-js");

const textToEncrypt = "Texte à chiffrer";
const password = "Mot de passe secret";

const encryptedText = CryptoJS.AES.encrypt(textToEncrypt, password).toString();
console.log("Texte chiffré : ", encryptedText);

const decryptedText = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);
console.log("Texte déchiffré : ", decryptedText);

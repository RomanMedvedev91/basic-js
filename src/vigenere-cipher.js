const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modeType = true) {
    this.modeType = modeType;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();
    const encryptStr = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message.charCodeAt(i);
      if (char >= 65 && char <= 90) {
        const charCode = key.charCodeAt(j++ % key.length);
        let encryptChar = char + charCode - 65;
        encryptChar > 90 ? (encryptChar -= 26) : null;
        encryptStr.push(String.fromCharCode(encryptChar));
      } else encryptStr.push(message[i]);
    }
    return !this.modeType ? encryptStr.reverse().join("") : encryptStr.join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();

    key = key.toUpperCase();
    const decryptStr = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message.charCodeAt(i);
      if (char >= 65 && char <= 90) {
        const charCode = key.charCodeAt(j++ % key.length);
        let decryptChar = char - charCode + 65;
        decryptChar < 65 ? (decryptChar += 26) : null;
        decryptStr.push(String.fromCharCode(decryptChar));
      } else decryptStr.push(message[i]);
    }
    return !this.modeType ? decryptStr.reverse().join("") : decryptStr.join("");
  }
}

module.exports = VigenereCipheringMachine;

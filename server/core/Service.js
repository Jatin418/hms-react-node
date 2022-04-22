//Checking the crypto module
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//Encrypting text
exports.encryptData = (text) => {
let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
let encrypted = cipher.update(text);
encrypted = Buffer.concat([encrypted, cipher.final()]);
return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') , "key" : key.toString('hex')};

// return encrypted.toString('hex');
console.log("Enc", encrypted.toString());
}

// Decrypting text
exports.decryptData = (text) => {
let iv = Buffer.from(text.iv, 'hex');
let enKey = Buffer.from(text.key, 'hex')//will return key;
let encryptedText = Buffer.from(text.encryptedData, 'hex');
let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(enKey), iv);
// decipher.setAutoPadding(false);
let decrypted = decipher.update(encryptedText);
decrypted = Buffer.concat([decrypted, decipher.final()]);
return decrypted.toString();

console.log("Decr", decrypted.toString());
}

// Text send to encrypt function
// var hw = encrypt("Welcome to Goa !!")
// console.log(hw)
// console.log(decrypt({
// iv: 'cedd3f3e367d4599f76f353367f867c3',
// encryptedData: '3b703e9190a5227b6287525aaadfb27d7b878859dab55833c9aa7234e3c5fbba',
// key: 'f5558f3afb6fa5cc847106ab0653ef3423ee5d57be932ab939b115e870b23e3a'
// }))





















     // As same as above 

// //Checking the crypto module
// const crypto = require('crypto');
// const algorithm = 'aes-256-cbc'; //Using AES encryption
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);
// let ivText;
// //Encrypting text
// const text = "Jatin"
// exports.encryptData = (text) => {
//       // console.log("encryptlog",encrypt);
//    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//    let encrypted = cipher.update(text);
//    encrypted = Buffer.concat([encrypted, cipher.final()]);
//    ivText = iv.toString('hex');
//   //  return encrypted.toString('hex');
//   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
//    console.log("enc", encrypted.toString('hex'))
//   //  iv: iv.toString('hex'), 
//   }     
//   // var hw = encryptData(text)
//   // console.log("encryptdata <=>",hw)

// // Decrypting text
// exports.decryptData = (text) => {
//   console.log("Decrypt",text);
//    let ivN = Buffer.from(text.iv, 'hex');
//   //  let ivN = Buffer.from(ivText, 'hex');
//    let encryptedText = Buffer.from(text.password, 'hex');
//    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), ivN);
//    let decrypted = decipher.update(encryptedText);
//    decrypted = Buffer.concat([decrypted, decipher.final()]);
//    return decrypted.toString();
//    console.log("enc", decrypted.toString())
// }

// // Text send to encrypt function
// // var hw = encryptData(text)
// // console.log("encryptdata <=>",hw)
// // console.log("Plain text <=>",decryptData({password:'a194012e305bf33fc8478bcf746b915b', iv: 'f0679f52d059a2a6a276a272f68eafd3'
// // }))





















































// const {Buffer} = require('buffer');
// const {
//   createCipheriv,
//   createDecipheriv,
//   randomBytes
// } =  require('crypto');

// // console.log("bur", Buffer);
// const key = 'keykeykeykeykeykeykeykey';
// const nonce = randomBytes(12);

// const aad = Buffer.from('0123456789', 'hex');
// let tag;
// const plaintext = 'Hello world';
// exports.encryptString = ($plaintext) => {
//   const cipher = createCipheriv('aes-192-ccm', key, nonce, {
//     authTagLength: 16
//   });

//   cipher.setAAD(aad, {
//     plaintextLength: Buffer.byteLength($plaintext)
//   });
//   const ciphertext = cipher.update($plaintext, 'utf8');
//   const encP = cipher.final();
//   tag = cipher.getAuthTag();
//   console.log("ecrypted", ciphertext);
//   return ciphertext;
// }

// // const tt = encryptString(plaintext)
// // console.log("final pwd",tt);
// // Now transmit { ciphertext, nonce, tag }.

// exports.decryptString = (ciphertext) => {
//   const decipher = createDecipheriv('aes-192-ccm', key, nonce, {
//     authTagLength: 16
//   });
//   decipher.setAuthTag(tag);
//   decipher.setAAD(aad, {
//     plaintextLength: ciphertext.length
//   });
//   const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

//   try {
//     decipher.final();
//   } catch (err) {
//     throw new Error('Authentication failed!', { cause: err });
//   }
//   console.log(receivedPlaintext);
//   return receivedPlaintext;
// }
// // console.log("final pwd ---", decryptString(tt));
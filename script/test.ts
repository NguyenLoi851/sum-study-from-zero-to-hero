const {PublicKey} = require('@solana/web3.js') 

console.log("Hello");

// const pubKeyStr = 'DDfFAXkNZx4sryDR1TaYKbpq7nAS1QBYsCUjqjvAuoXt'
// const pubKeyStr = 'Ckoq19rjKShEpmZTH23GptvFZSW4Q5s2TwiwNUb4C15g'
const pubKeyStr = '3tfLbi7bAJZfCJPM1UAB8Qq62HmoFWjmXAyBEkv3obLw'

console.log("Len: ", pubKeyStr.length)

const pubKey = new PublicKey(pubKeyStr)

console.log(PublicKey.isOnCurve(pubKey))

const arrKey = [26,59,177,76,33,230,166,22,193,242,17,164,170,7,108,9,194,222,85,168,104,238,7,58,49,197,137,6,251,56,27,97,181,138,116,168,89,177,149,95,106,243,183,109,96,167,199,159,94,18,199,33,119,215,38,145,132,245,252,53,80,10,181,199]

console.log(arrKey.length)

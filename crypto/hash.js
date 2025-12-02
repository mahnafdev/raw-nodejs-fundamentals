const crypto = require("crypto");

const password = "PassWord68";

function hashPassword(algo) {
	return crypto.createHash(algo).update(password).digest("hex");
}

// MD5 (🌀)
const hashMd5 = hashPassword("md5");
console.log("Md5:", hashMd5);

// SHA1 (🌀)
const hashSha1 = hashPassword("sha1");
console.log("Sha1:", hashSha1);

// SHA224 (🌀)
const hashSha224 = hashPassword("sha224");
console.log("Sha224:", hashSha224);

// SHA256 (🌀🌀)
const hashSha256 = hashPassword("sha256");
console.log("Sha256:", hashSha256);

// SHA512 (🌀🌀)
const hashSha512 = hashPassword("sha512");
console.log("Sha512:", hashSha512);

// SHA3-256 (🌀🌀🌀)
const hashSha3256 = hashPassword("sha3-256");
console.log("Sha3-256:", hashSha3256);

// SHA3-512 (🌀🌀🌀🌀)
const hashSha3512 = hashPassword("sha3-512");
console.log("Sha3-512:", hashSha3512);

// SHAKE256 (🌀🌀🌀🌀)
const hashShake256 = hashPassword("shake256");
console.log("Shake256:", hashShake256);

// BLAKE2 (🌀🌀🌀🌀)
const hashBlake2b512 = hashPassword("blake2b512");
console.log("Blake2b512:", hashBlake2b512);

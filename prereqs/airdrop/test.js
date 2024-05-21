const bs58 = require('bs58'); // You need to install this library using npm

function base58ToWallet(base58) {
    try {
        const wallet = bs58.decode(base58);
        console.log(wallet);
    } catch (error) {
        console.error('Decoding failed:', error.message);
    }
}

// Example usage
const base58String = "nvjfbvjkbdjvbdsjvbdbsvkjbdjvjdkvbjdsbvvndfjvkdfnvjfbdjkvndfkv";
base58ToWallet(base58String);


base58ToWallet();

import { Blockchain } from "./Blockchain.js";
import { Transaction } from "./Transaction.js";
const EC = require('elliptic').ec;
const e = new EC('secp256k1');

const myKey = ec.keyFromPrivate("72728596390677c7c60299e83e78abff8270c3e2c0f87d28a36ade89bfa753f9");
const myWalletAddress = myKey.getPublic('hex');

let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key is here', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log('\n Starting the miner...');
coin.minePendingTransactions(myWalletAddress);

console.log('Balance of vegard is', coin.getBalanceOfAddress('vegard-address'));

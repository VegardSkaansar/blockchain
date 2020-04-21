import sha256 from 'crypto-js/sha256.js';
import crypto from 'crypto';

class Block {
    constructor(timestamp, transactions, prevHash = "") {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = prevHash;
        this.hash = this.getHash();
        this.nonce = 0;
    }

    getHash() {
        return crypto.createHash('sha256').update(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).digest('hex');
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.getHash();
        }
        console.log("Blocked mined:" + this.hash);
    }

    hasValidTransactions() {
        for(const tx of this.transactions) {
            if(!tx.isValid()) {
                return false;
            }
        }
        return true;
    }
}

export { Block as Block };




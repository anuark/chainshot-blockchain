const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(value) {
        this.timestamp = Date.now();
        this.nonce = 0;
        this.transactions = [];
    }
    addTransaction(trx) {
        this.transactions.push(trx);
    }
    hash() {
        return SHA256(
            this.timestamp + "" + 
            this.nonce + "" + 
            JSON.stringify(this.transactions)).toString();
    }
    execute() {
        for (let trx of this.transactions) {
            trx.execute();
        }
    }
}

module.exports = Block;


const Block = require('./Block');
const db = require('./db');
const TARGET_DIFFICULTY = '0x0' + 'F'.repeat(63);
const Transaction = require('./Transaction');
const { PUBLIC_KEY } = require('./config');
const UTXO = require('./UTXO');
const COINBASE_REWARD = 20;

let mining = false;
mine();

function startMining() {
    mining = true;
    mine();
}

function stopMining() {
    mining = false;
}

function mine() {
    if (!mining) {
        return;
    }

    const block = new Block();

    // add transactions from mempool
    const coinbaseUTXO = new UTXO(PUBLIC_KEY, COINBASE_REWARD);
    const coinbaseTx = new Transaction([], [coinbaseUTXO]);
    block.addTransaction(coinbaseTx);

    while(block.hash() >= TARGET_DIFFICULTY) {
        block.nonce++;
    }

    block.execute();

    db.blockchain.addBlock(new Block());
    console.log(`just mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} with a nonce of ${block.nonce}`);

    setTimeout(mine, 1500);
}

module.exports = {
    startMining,
    stopMining
};

const Blockchain = require('./Blockchain');

const db = {
    blockchain: new Blockchain(),
    utxos: []
}

module.exports = db;


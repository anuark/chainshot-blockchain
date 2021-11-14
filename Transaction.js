const { utxos } = require('./db');

class Transaction {
    constructor(inputs, outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }
    execute() {
        for (let input of this.inputs) {
            input.spent = true;
        }

        for (let output of this.outputs) {
            utxos.push(output);
        }
    }
}

module.exports = Transaction;


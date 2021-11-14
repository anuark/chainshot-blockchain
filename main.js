const jayson = require('jayson');
const { startMining, stopMining } = require('./mine');
const { utxos } = require('./db');

// create a server
const server = new jayson.Server({
    startMining: function(_, callback) {
        // callback(null, args[0] + args[1]);
        callback(null, 'success');
        startMining();
    },
    stopMining: function(_, callback) {
        // callback(null, args[0] + args[1]);
        callback(null, 'success');
        stopMining();
    },
    getBalance: function([address], callback) {
        const outUTXOs = utxos.filter(x => x.owner === address && !x.spent);
        const sum = outUTXOs.reduce((p, c) => p + c.amount, 0);
        callback(null, sum);
    }
});

server.http().listen(3000);

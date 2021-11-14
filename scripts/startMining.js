const client = require('./client');

client.request('startMining', [], function(err, res) {
    if (err) {
        throw err;
    }

    console.log(res.result);
});


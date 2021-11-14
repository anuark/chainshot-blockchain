const client = require('./client');

client.request('stopMining', [], function(err, res) {
    if (err) {
        throw err;
    }

    console.log(res.result);
});

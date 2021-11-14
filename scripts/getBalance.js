const client = require('./client');
const { PUBLIC_KEY } = require('../config');

client.request('getBalance', [PUBLIC_KEY], function(err, res) {
    if (err) {
        throw err;
    }

    console.log(res.result);
});

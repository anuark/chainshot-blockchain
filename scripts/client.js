const jayson = require('jayson');
const mine = require('../mine');

const client = jayson.client.http({
    port: 3000
});

module.exports = client;


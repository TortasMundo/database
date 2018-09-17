var config = {};

config.port = process.env.PORT || 4000;
config.local_url = 'http://localhost:' + config.port;
config.mock_url = 'http://mock.localhost:' + config.port;

module.exports = config;

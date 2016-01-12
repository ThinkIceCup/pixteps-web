// module
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');

var app = express();

module.exports = function() {
    process.env.NODE_ENV = config.server.env;

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static('public'));

    require('../app/routes/routes')(app);

    return app;
};
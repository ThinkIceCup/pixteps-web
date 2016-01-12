var app = require('./config/express')();
var config = require('./config/config');

if (process.env.NODE_ENV === 'dev') {
    var morgan = require('morgan');
    app.use(morgan('dev'));
}

app.listen(config.server.port, function(err){
    if (err) throw err;

    console.log('Application running on port: %s', config.server.port);
});


var express = require('express');
var path = require('path');
var morgan = require('morgan');
var favicon = require('serve-favicon');

function configureEndpoints(app) {
    // Set Public Folder
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

    var pages = require('./pages');

    app.get('/', pages.homePage);

    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    var app = express();
    app.set('port', (process.env.PORT || port));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(morgan('dev'));

    configureEndpoints(app);
    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });
}

exports.startServer = startServer;

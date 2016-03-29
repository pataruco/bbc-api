var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path'),
    morgan = require('morgan'),
    request = require('request'),
    bodyParser = require('body-parser'),
    controllers = require('./controllers/letter-list-controller'),
    expressLayouts = require('express-ejs-layouts');

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Router
app.use('/', controllers);

//Server console
app.use((req, res, next) => {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

//Server
var server = app.listen(port, () => {
  console.log(`BBC API is working on port ${port}`);
});

module.exports = server;

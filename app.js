const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/routes');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', routes);


module.exports = app;
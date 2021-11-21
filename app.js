const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const mqtt = require('mqtt');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', routes);


var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on('connect' ,()=>{
    client.subscribe('sim/testdata');
})

client.on('message', (topic,message) =>{
    const data = JSON.parse(message);
    console.log(topic);
    console.log(data);
})

module.exports = app;
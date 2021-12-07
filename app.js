const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const mqtt = require('mqtt');
const queries = require('./db/queries');
const dbroutes = require('./api/routes/dbroutes');
const routes = require('./api/routes/index');
const cors = require('cors');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.options('*',cors());


//Routing and HTTP headers
app.use('/', routes);
app.use('/dogs',dbroutes);

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//MQTT connection and subscribing
var client = mqtt.connect('mqtt://127.0.0.1:1883');

//MQTT eventhandlers
client.on('connect' ,()=>{
    client.subscribe('sim/testdata');
})

client.on('message', (topic,message) =>{
    const data = JSON.parse(message);
    queries.insertOne(data);
    console.log(data);
})


module.exports = app;
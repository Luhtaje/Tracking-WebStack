const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const mqtt = require('mqtt');
const queries = require('./db/queries');

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


/*******************************************************************
 * Database testing ground
 ******************************************************************/
 testData= {
    dogId:1,
    lat:2.123123,
    lon:4.231414
}

queries.insertOne(testData);

async function getDog(){
    const response = await queries.getDog(1);
    console.log(response);
   
}
getDog();


module.exports = app;
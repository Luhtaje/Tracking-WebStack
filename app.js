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
    queries.insertOne(data);
    console.log(data);
})


/*******************************************************************
 * Database testing ground
 ******************************************************************/

/*async function getDog(){
    const response = await queries.getDog(1);
    console.log(response);
   
}

getDog();
*/

queries.fetchDogs(1);


module.exports = app;
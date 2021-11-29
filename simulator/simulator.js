'use strict';

const mqtt = require('mqtt');

const addr = 'mqtt://127.0.0.1:1883';  //Brokers address
const t = 2;  // modify to change the sending interval
const client = mqtt.connect(addr);


setInterval(() => {
	let obj = {
		dog:1,
		lat:2.15152,
		lon:2.11322,
	}

	client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct

}, t * 1100);

setInterval(() => {
	let obj = {
		dog:2,
		lat:2.4255,
		lon:2.8653,
	}

	client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct

}, t * 1299);

setInterval(() => {
	let obj = {
		dog:3,
		lat:1.24155,
		lon:3.12122,
	}

	client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct

}, t * 1450);

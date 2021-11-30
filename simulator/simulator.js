'use strict';

const mqtt = require('mqtt');

const addr = 'mqtt://127.0.0.1:1883';  //Brokers address
const t = 2;  // modify to change the sending interval
const client = mqtt.connect(addr);


// setInterval(() => {
// 	const rando = Math.random()* 0.2;
// 	const randa = Math.random()* 0.2;
// 	let obj = {
// 		dog:1,
// 		lat:62.509722,
// 		lon:28.909110,
// 	}

	

// }, t * 1100);

let obj = {
	dog:1,
	lat:62.509722,
	lon:28.909110,
}

client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct

// setInterval(() => {
// 	let obj = {
// 		dog:2,
// 		lat:2.4255,
// 		lon:2.8653,
// 	}

// 	client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct

// }, t * 1299);

// setInterval(() => {
// 	let obj = {
// 		dog:3,
// 		lat:1.24155,
// 		lon:3.12122,
// 	}

// 	client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct

// }, t * 1450);

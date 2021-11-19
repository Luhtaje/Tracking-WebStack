'use strict';

const mqtt = require('mqtt');


const addr = 'mqtt://127.0.0.1:1883';  //Brokers address
const t = 2;  // modify to change the sending interval

let pid = 1;
let gid = 21;
let timeNow = Date.now;
let lat = 0.01
let lon = 0.02


const client = mqtt.connect(addr);


setInterval(() => {
	const obj = {
		personid: pid,
		groupid: gid,
		date: timeNow,
		coordinates: {
			latitude: lat,
			longitude: lon
		}
	}
	tmp += Math.floor(Math.random() * 3 - 1);
	client.publish('sim/testdata', JSON.stringify(obj)); // See that topic is correct
	count += 1;
	ts += t;
}, t * 1000);

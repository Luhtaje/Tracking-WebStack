//Execute this file before running the server (index.js)
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./local.db');

//Creates 1 table for dogs
db.run(`CREATE TABLE dogs (
    item INTEGER PRIMARY KEY, 
    dog INTEGER,
    lat FLOAT,
    lon FLOAT)`)
db.close();
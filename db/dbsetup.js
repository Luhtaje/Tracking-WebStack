//Execute this file before running the server (index.js)
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./local.db');
//db.run('DROP TABLE dogs');
db.run(`CREATE TABLE dogs (
    item INTEGER PRIMARY KEY, 
    dog INTEGER,
    lat FLOAT,
    lon FLOAT)`)
console.log(`RAN`);
db.close();
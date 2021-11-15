//Execute this file before running the server (index.js)
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./local.db');
db.run('CREATE TABLE groups(groupid INTEGER PRIMARY KEY AUTOINCREMENT, size INTEGER NOT NULL)')
db.run('CREATE TABLE persons(personid INTEGER PRIMARY KEY AUTOINCREMENT,groupid INTEGER FOREIGN KEY)');
console.log(`Tables created`);
db.close();
import db from './index.js';
const sqlite = require('sqlite3').verbose();

//Does this populate db?
module.exports.putPerson = () => {
    db.run(`INSERT INTO persons`)
}

module.exports.getGroups = () => {
    db.all(`SELECT * FROM groups ORDER BY groupid`,[],function(err,data){
        console.log(data);
    });
}
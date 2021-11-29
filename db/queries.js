//import db from './index.js';
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./local.db');


module.exports.insertOne = (dataObj) => {
    db.run(`INSERT INTO dogs VALUES (NULL, "${dataObj.dog}","${dataObj.lat}","${dataObj.lon}")`,[], (err)=>{
        if(err) console.log(err);
    })
}

module.exports.fetchDogs = async(dog) => {
    const response = await getDog(dog);
    console.log(response);
   return response;
}

function getDog(dog) {
    return new Promise((resolve,reject) =>{
        db.all(`SELECT * FROM dogs where dog ="${dog}"`,[],(err,response)=>{
            if(err){
                console.log(err);
                reject();
            }
            resolve (response);
        })
    })
}
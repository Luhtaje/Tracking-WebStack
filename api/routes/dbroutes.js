//HTTP routes that access the database. This file is mounted on /dog route,
//so fetching from /dog invokes the '/' route in this file.

const express = require('express');
const queries = require('./../../db/queries.js');
const router = express.Router();


//Returns every entry in database with given dog.
router.get('/:dog', async (req ,res)=>{
    let dog = req.params.dog;
    const dogs = await queries.getOne(dog);
    //console.log(dogs);
    res.status(200).send(dogs);
})

//Returns every entry in the database. (All saved coordinates for all dogs.)
router.get('/',async (req ,res)=>{
    const dogs = await queries.getDogs();
    //console.log(dogs);
    res.status(200).send(dogs);
})

module.exports = router;
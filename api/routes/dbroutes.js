//HTTP routes that access the database
const express = require('express');
const queries = require('./../../db/queries.js');
const router = express.Router();



router.get('/:dog', async (req ,res)=>{
    let dog = req.params.dog;
    const dogs = await queries.getOne(dog);
    //console.log(dogs);
    res.status(200).send(dogs);
})


router.get('/',async (req ,res)=>{
    const dogs = await queries.getDogs();
    //console.log(dogs);
    res.status(200).send(dogs);
})

module.exports = router;
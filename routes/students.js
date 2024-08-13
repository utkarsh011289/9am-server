var express = require('express')
var mongodb=require('mongodb')
var router = express.Router();
var getDB=require('../common/dbConn')

router.post("/register",async function( req,res,next){
      try{
       const data=req.body.data;      
       const db=await getDB();
       const collection=db.collection('students')
       const result= await collection.insertOne(data)
       res.send(result)
      }  catch(ex) {
            res.send(ex.message);
      }
})

router.get('/get-std',async function(req,res,next){
      try{
      const db=await getDB();
      const collection=db.collection('students');
      const result= await collection.find().toArray();
      res.send(result);
      }  catch(ex) {
            res.send(ex.message);
       }

})
module.exports = router ;
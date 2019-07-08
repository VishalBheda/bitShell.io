const express=require('express');
const router=express.Router();

//const Item=require('../../models/items');
const mongodbutil=require('../../mongodbutil/mongodbutil');
const db=mongodbutil.getDb();

let chain = require('../../blockchain/blockchain');
let block = require('../../blockchain/block');
let train;
//@router GET api/items
//@desc   get all items
//@access public

router.get('/',(req,res,next)=>{
    
    db.collection('train_db').find({},{projection:{ _id: 0 }})
    .toArray((err, result)=>{
       
       res. send( result );

       if( err )  return console.log(err)

       db.collection( 'train_db' ).find( {} ).count( (err,res)=>{
           if(res===0){            
            train = new chain(true,result);
           }
           else{
            train = new chain(false,result);
           }
       })
       
   });
   
});

router.get('/:item',(req,res,next)=>{
    res.send(train.chain);
    console.log('In Insert!!');

    db.collection('train_db').insertMany(train.chain, function(err, res) {
        
        if (err) console.log('NOT INSERT CHECK AGAIN'+err);
        console.log("Number of documents inserted: ");
       
      });
});



module.exports=router;
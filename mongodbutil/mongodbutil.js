const MongoClient= require('mongodb').MongoClient;
var _db;
const url=require('../config/url').mongoURL;

module.exports ={
    connectToServer : (callback)=>{
        MongoClient.connect(url,(err, client)=>{
          
            if(err){
                return callback(err);
            } else {
                _db=client.db("train_db");
                return callback(_db)
            }
            
        });
    },
    getDb:()=>{
        return _db;
    }
};
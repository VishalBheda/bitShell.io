const SHA256 = require("crypto-js/sha256");

module.exports = class Blockchain {
        constructor(item,index=0){
            console.log(item);
            this.index=index;
            this.prevHash="";
            this.item=item;
            this.timestamp=(new Date()).toString();
            this.nonce=0;
            this.hash=this.calculateHash();     
        }

        //CALCULATE HASH (SHA-256)
        calculateHash(){
            return SHA256( this.index +
                this.prevHash +
                JSON.stringify(this.item) +
                this.timestamp +
                this.nonce).toString();
        }

        //BLOCK MINING
        mineBlock(difficulty){
            console.log('[STATUS]: Mining Block ('+(this.index).toString()+') with PoW');

           let start_time=new Date();

           while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0")){
                this.nonce++;
                this.hash=this.calculateHash();
           }

           let end_time=new Date();

            console.log('[INFO] Time Elapsed '+((end_time-start_time)/1000).toString()+' seconds');
            console.log('[INFO] Mine Hash '+this.hash);

        } 
}
const Block= require('./block')


//a Blockchain class
module.exports = class Blockchain {
    
    //Intial Constructor
    constructor(isgenesis,prevchain){
        console.log("Hello From Engine");
        if(isgenesis===true){
           this.chain=[this.createGenesisBlock()];
           this.difficulty = 3;
        }
        else{
            console.log(prevchain);
            this.chain=prevchain;
            console.log(this.chain);
            console.log('Prev Chain Is Also Here');
        }
    }

    //CREATE GENESIS BLOCK
    createGenesisBlock(){
        return new Block("Engine Started (Genesis Block)..");
    }

    //GET LATEST BLOCK
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    //ADD NEW BLOCK
    addBlock(newBlock){
            newBlock.prevHash=this.getLatestBlock().hash;
            newBlock.index=this.chain.length;
            newBlock.mineBlock(this.difficulty);

            this.chain.push(newBlock);
            this.writeBlocks()
    }

    //WRITE BLOCK
    writeBlocks(){
       const file= require('fs');
       let train_data=JSON.stringify(this.chain,null,' ');
        file.writeFile('block_train.txt',train_data,(err)=>{
            if(err){
                return console.error(err);
            }
        });
        return ("Success !!");
    }

   
}

 
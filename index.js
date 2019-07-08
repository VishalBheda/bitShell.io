
// import {Blockchain} from './blockchain/blockchain'
let chain = require('./blockchain/blockchain');
let block = require('./blockchain/block');

console.log("Lets Go!!!");
let train=new chain(true);
//console.log(train.getLatestBlock());
train.addBlock(new block("Hey Im The First Compartment"));
//console.log(train.getLatestBlock());
console.log(train.writeBlocks());

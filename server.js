
const express=require('express');
const body_parser=require('body-parser');

const app=express();

//middleware
app.use(body_parser.json());

//connect db
const mongodbutil=require('./mongodbutil/mongodbutil');
mongodbutil.connectToServer((err)=>{
    const items=require('./router/api/items');
    app.use('/api/items',items);
});


const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server started on port ${port}`));
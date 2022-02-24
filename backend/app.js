const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
require('./database/databaseconnection');

//const bodyparser=require('body-parser');
//app.use(bodyparser());

////const User=require('./model/Users');

//const userroutes=require('./routes/User');
//const secret="RESTAPI";
//app.use('/',userroutes);

app.listen(process.env.PORT,()=>{
    console.log(`serve is running at ${process.env.PORT}`);
});
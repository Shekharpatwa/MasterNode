require('dotenv').config()
const express = require('express');
const morgan= require('morgan');
const mongoose = require('mongoose');
const server = express();
const path = require('path');
//console.log('env',process.env.DB_PWD);
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const cors = require('cors');

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/MasterNode');
  await mongoose.connect(process.env.MONGO_URL);
    console.log("connected db");
}

server.use(cors());


//body parser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

server.listen(process.env.PORT);
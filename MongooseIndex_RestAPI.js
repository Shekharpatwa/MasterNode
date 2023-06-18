require('dotenv').config()
const express = require('express');
const morgan= require('morgan');
const server = express();
console.log('env',process.env.DB_PWD);
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
//body parser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.listen(process.env.PORT);
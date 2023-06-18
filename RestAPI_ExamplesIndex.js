const express = require('express');
const morgan= require('morgan');
const fs = require('fs');
const server = express();
// const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

// server.use(morgan('dev'));
server.use(express.json());
// server.use(morgan('default'));
// server.use(express.static('public'));

//body parser
// server.use(express.urlencoded());
// server.use((req,res,next)=>{
//     next();

// })

// For Authentication
// const auth =(req,res,next)=>{
//     // if(req.body.password =="190"){
//     //     next();
//     // }else{
//     //     res.sendStatus(401);
//     // }
//     next();
// }


// server.get('/demo/:id',auth,(req,res)=>{
//     console.log(req.params);
//     res.status(200).send(index);
// });

// server.post('/',auth,(req,res)=>{
//     res.status(200).send(index);
// });

//REST API's

//API ROOT , base URL, google.com/api/v2

server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const product = products.find(p=>p.id===id);
    res.json(product);
});

//get All products
server.get('/allProducts',(req,res)=>{
    res.json(products);
});

//Create POST /products
server.post('/products',(req,res)=>{
    products.push(req.body);
    res.status(201).json(req.body);
});


//UPDATE /products/:id
server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.find(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(200).json();
});

//UPDATE Patch
server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(200).json(product);
});

//DELETE Patch
server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id==id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    console.log(product)
    res.status(200).json(product);
});
server.listen(8000);

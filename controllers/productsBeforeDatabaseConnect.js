const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;
// const users = data.users;
exports.getAllProducts = (req,res)=>{
    res.json(products);
};

exports.getProduct = (req,res)=>{
    const id = +req.params.id;
    const product = products.find(p=>p.id===id);
    res.json(product);
};

exports.createProducts = (req,res)=>{
    products.push(req.body);
    res.status(201).json(req.body);
};

exports.replaceProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.find(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(200).json();
};

exports.updateProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(200).json(product);
}

exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id==id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    console.log(product)
    res.status(200).json(product);
};
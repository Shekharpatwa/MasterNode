const fs = require('fs');
const mongoose = require('mongoose');
const model = require('../models/product');
const Product = model.Product;

exports.getAllProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products);
};

exports.getProduct = async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
};

exports.createProducts = async(req,res)=>{
    const product = new Product(req.body);
    await product.save()
    .then(()=>{
        res.status(201).json(req.body);
    })
    .catch((error)=>{
        console.log(error);
        res.send(400,error);
    });
};

exports.replaceProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findOneAndReplace({_id:id},req.body,{new:true});
        res.status(200).json({product});
    }catch(err){
        res.status(400).json(err);
    }
};

exports.updateProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
        res.status(200).json({product});
    }catch(err){
        res.status(400).json(err);
    }
}

exports.deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const product = await Product.findOneAndDelete({_id:id});
        res.status(200).json({product});
    }catch(err){
        res.status(400).json(err);
    }
};
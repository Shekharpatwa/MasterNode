const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

router.get('/',productsController.getAllProducts)
        .get('/:id',productsController.getProduct)
        .post('/',productsController.createProducts)
        .put('/:id',productsController.replaceProduct)
        .patch('/:id',productsController.updateProduct)
        .delete('/:id',productsController.deleteProduct);

exports.router = router;
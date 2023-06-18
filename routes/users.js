const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.get('/',userController.getAll)
        .get('/:id',userController.getUser)
        .post('/',userController.create)
        .put('/:id',userController.replace)
        .patch('/:id',userController.update)
        .delete('/:id',userController.delete);

exports.router = router;
const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title:{type:String, required:true, unique:true},
    description:{type:String},
    price:{type:Number,min:[9000,'Must greater tahn 9000']},
    discountPercentage:{type:Number},
    rating:{type:Number, min:[0,'must be greater than 0'],max:[5,'must be less than or equal to 5'],default:0},
    stock:{type:Number},
    brand:{type:String, required:true},
    category:{type:String},
    thumbnail:{type:String},
    images:[String]
});

exports.Product = mongoose.model('Product', productSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 

let productSchema = new Schema({
    image: String,
    name: String,
    precio: String,
    comments : String,
    //created_at : {type: Date, default: Date.now},
    //updated_at : {type: Date, default: Date.now},
    //numeroPost : Number
});


let Product = mongoose.model("product",productSchema);

module.exports = Product; //exportar un modelo en mongo



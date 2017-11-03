


const route = require('express').Router();
const Product = require('../models/product')

route.get('/',function(req,res){
    Product.find({},function(err,products){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).send(products);
    });
});



route.get('/:id',function(req,res){
    Product.findById(req.params.id,function(err,product){
        if(err)
            return;
            res.status(200).send(product)
        
    });
});

route.post('/',function(req,res){
    let product = new Product({
        name: req.body.name,
        image: req.body.image,
        precio: req.body.precio,
        comments: req.body.comments
        //created_at: req.body.created_at,
        //updated_at: req.body.updated_at,
        //numeroPost: req.body.numeroPost
    });
    product.save(function(err,product){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).send(product);
    });
});

route.put('/:id',function(req,res){
    Product.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            image: req.body.image,
            precio: req.body.precio,
            comments: req.body.comments
        },
        function(err,product){
            if(err){
                console.log(err)
                return;
                res.status(200).send("Actualizado");
            }
        });    
});

route.delete('/:id',function(req,res){
    Product.findByIdAndRemove(req.params.id,function(err,product){
        if(err)
            return;
            res.status(204).send(product); 
    });
});

module.exports = route;





const mongoose = require('mongoose');//27017 puerto de mongo
mongoose.connect('mongodb://localhost/products',{useMongoClient:true});

var db = mongoose.connection;

db.on('error',function(){
    console.log('error al conectarse con mongo')
});

db.once('open',function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log('Conexion realizada');
})

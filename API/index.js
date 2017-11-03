

const express = require('express');
const port = 8000;
const BodyParser = require('body-parser');
let app = express();

let productRoute = require('./routes/products')
let db = require('./config/db')


app.use(BodyParser.urlencoded({extenden: false}));//formularios htmls
app.use(BodyParser.json());//aceptar JSON
//orm manejadores de base de datos
//odm manejador de documentos

app.use('/products',productRoute);

app.listen(port,function(err,res){ //abrir un servicio en ese puerto
    if(err){
        console.log("ERROR");
        return;
    }
    console.log(`caca ${port}`);
})


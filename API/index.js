const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
// crear el server
const app = express();

// conectar a mongodb

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


// habilitar el body-parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// habilitar routing
app.use('/',routes()) // cuando termine de visitar  / ir a routes



// puerto y arrancar el servidor 
app.listen(4000, () =>{
    console.log('servidor funcionando')
})


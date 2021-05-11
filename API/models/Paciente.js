const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
    nombre : {
        type: String,
        trim: true, // elimina los espacio en blanco lo hace mongo
    },
    propietario : {
        type: String,
        trim: true, // elimina los espacio en blanco lo hace mongo
    },
    fecha : {
        type: String,
        trim: true, // elimina los espacio en blanco lo hace mongo
    },
    hora : {
        type: String,
        trim: true, // elimina los espacio en blanco lo hace mongo
    },
    sintomas : {
        type: String,
        trim: true, // elimina los espacio en blanco lo hace mongo
    }

});

module.exports = mongoose.model('Paciente',pacientesSchema);

const express = require('express');
const { connect } = require('mongoose');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');


module.exports = function(){

    // agrega nuevos pacientes via POST
    router.post ('/pacientes',

        pacienteController.nuevoCliente


    );
    // obtiene todos los registros de paciente en la BD
    router.get('/pacientes',
    pacienteController.obtenerPacientes
    );

    // obtiene un paciente en espacifico (ID)
    // si tiene :id 2 puntos es como comodin osea llamara el ide del 1 al 10000
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );
     
    // ACTUALIZAR UN REGISTRO CON ID ESPECIFICO
    router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
    );
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
    );

    return router;
}


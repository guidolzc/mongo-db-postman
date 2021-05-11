const Paciente = require('../models/Paciente');


// cuando se crea un nuevo cliente
// REQ = dato que se envia con respecto al servidor
//RES = respuesta del servidor 
// NEXT = q le dira a expres q cuando hallas terminado eso corras determinada funsion

exports.nuevoCliente = async(req,res,next) => {
    //console.log(req.body);

    // crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
            await paciente.save();
            res.json({mensaje: 'El cliente se agrego correctamente'});
            
    } catch (error) {
        console.log(error);
        next();
    }

}
// obtiene TODOS LOS PACIENTES 

exports.obtenerPacientes = async (req,res,next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
        
    }
}

// obtiene un paciente en especifico por su id

exports.obtenerPaciente = async (req,res,next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);//  PARAMS = A 1 
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
        
    }
}
// ACTUALIZA UN PACIENTE POR ID
exports.actualizarPaciente = async (req,res,next) => {
    try {                              // BUSCA UN REGISTRO Y ACTUALIZAAUTO(_ID DE MOGOODB EL ID DEFINIDO Y EL DONDE LO VAMOS ACTUALIZAR Q ES D POSTMAN)                 
       const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {  
           new: true  // Q NOS TRAIGA EL NUEVO DOCUMENTO
       });
       res.json(paciente);// muestra EN EL POSTMAN EL RESULTADO 
    } catch (error) {
        console.log(error);
        next();
        
    }
}

//elimina un paciente por ID
exports.eliminarPaciente = async (req,res,next) => {
    try {                            
            await Paciente.findOneAndDelete({_id : req.params.id});
            res.json({mensaje : 'El paciente fue eliminado'})
        
    } catch (error) {
        console.log(error);
        next();
        
    }
}
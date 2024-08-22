const { validate, clean, format } = require('rut.js');

const validarRut = async (rut) => {
    try {
        const validateRut = validate(rut);
        if (!validateRut) throw "Rut inválido";
        const cleanRut = clean(rut);
        const formateado = format(cleanRut, { dots: false });
        return formateado;   
    } catch (error) {        
        return { error };
    }
}

module.exports = {
    validarRut
}
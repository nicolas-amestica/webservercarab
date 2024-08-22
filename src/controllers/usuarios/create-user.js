const usuario = require("../../services/usuarios/user");
const rut = require("../../common/validar-rut");

const createUser = async(req, res) => {
    console.log(req);
    try {
        const { USU_RUT, USU_NOMBRE, USU_APELLIDO_1, USU_APELLIDO_2 } = req.body
        if (!USU_RUT ||
            !USU_NOMBRE ||
            !USU_APELLIDO_1 ||
            !USU_APELLIDO_2
        ) {
            throw new Error("Faltan parámetros de entrada");
        }

        const validarRut = await rut.validarRut(USU_RUT);
        if (validarRut.error) throw validarRut.error;
        
        const user = {
            USU_RUT: validarRut,
            USU_NOMBRE,
            USU_APELLIDO_1,
            USU_APELLIDO_2,
        }
        const result = await usuario.createUser(user);
        if (result.error) throw (result.error);

        res.status(201).send({ message: 'Usuario creado correctamente', result })
    } catch (e) {
        res.status(403).send({ message: "Error al crear usuario", error: e })
    }
}

module.exports = {
    createUser
}
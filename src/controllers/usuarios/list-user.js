const usuario = require("../../services/usuarios/user");

const listUser = async(req, res) => {
    console.log(req);
    try {
        const { rut } = req.params;
        if (!rut) throw "Faltan parámetros de entrada";

        let pathQuery = "";
        if (rut) pathQuery = `AND USU_RUT = "${rut}"`;
        
        const result = await usuario.listUser(pathQuery);
        if (result.error) throw (result.error);

        res.status(200).send({ message: 'Usuario listado correctamente', result })
    } catch (e) {
        res.status(403).send({ message: "Error al listar usuario", error: e })
    }
}

module.exports = {
    listUser
}
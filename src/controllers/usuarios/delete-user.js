const usuario = require("../../services/usuarios/user");

const deleteUser = async(req, res) => {
    console.log(req);
    try {
        const { rut } = req.params
        if (!rut) throw "Faltan parámetros de entrada";
        
        const result = await usuario.deleteUser(rut);
        
        if (result.error) throw (result.error);

        res.status(200).send({ message: 'Usuario eliminado correctamente', result })
    } catch (e) {
        res.status(403).send({ message: "Error al eliminar usuario", error: e })
    }
}

module.exports = {
    deleteUser
}
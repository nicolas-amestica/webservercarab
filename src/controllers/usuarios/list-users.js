const usuario = require("../../services/usuarios/user");

const listUsers = async(req, res) => {
    console.log(req);
    try {
        const result = await usuario.listUsers();
        if (result.error) throw (result.error);

        res.status(200).send({ message: 'Usuarios listados correctamente', result })
    } catch (e) {
        res.status(403).send({ message: "Error al listar los usuarios", error: e })
    }
}

module.exports = {
    listUsers
}
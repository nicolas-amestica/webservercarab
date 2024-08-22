const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const controllerAuth = require("../controllers/authorization/auth");

const controllerCreateUser = require("../controllers/usuarios/create-user");
const controllerDeleteUser = require("../controllers/usuarios/delete-user");
const controllerListUser = require("../controllers/usuarios/list-user");
const controllerListUsers = require("../controllers/usuarios/list-users");

router.post("/login", controllerAuth.login);
router.post("/usuarios/create", auth.isAuth, controllerCreateUser.createUser);
router.delete("/usuarios/delete/:rut", auth.isAuth, controllerDeleteUser.deleteUser);
router.get("/usuarios/list/:rut", auth.isAuth, controllerListUser.listUser);
router.get("/usuarios/list", auth.isAuth, controllerListUsers.listUsers);

module.exports = router;
var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController");

//CREACION

router.get("/crear", cancionesController.crear);
router.post("/crear", cancionesController.guardado);

//LECTURA

router.get("/", cancionesController.listado);

module.exports = router;

var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController");

//CREACION

router.get("/crear", cancionesController.crear)

module.exports = router;
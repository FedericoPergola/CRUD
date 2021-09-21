var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController");

//CREACION

router.get("/", cancionesController.canciones);
router.post("/", cancionesController.guardado);
 router.get("/:id", cancionesController.detalle);
// router.put("/:id", 
 router.delete("/:id", cancionesController.borrar) 
// router.get("/albumes/canciones",


module.exports = router;

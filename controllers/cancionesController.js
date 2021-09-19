let db = require("../database/models")

let cancionesController = {
    
    crear: function (req, res){
        db.Cancion.findAll()
          .then(function(canciones){
              return res.render("creacionCanciones", {canciones:canciones});
              //console.log(canciones);
              //res.send(canciones)
          })
          .catch((e) => {
              console.log(e);
          })
    },
    guardado: function (req, res){
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            created_at: req.body.creacion,
            updated_at: req.body.actualizacion,
            genero_id: req.body.genero,
            album_id: req.body.album,
            artista_id:req.body.artista,
        }),
        res.redirect("/canciones/crear");
    },
    
    listado: function (req, res){
        db.Cancion.findAll()
        .then(function(canciones){
            res.render("listadoCanciones", {canciones:canciones})
    })
    }
}
module.exports = cancionesController
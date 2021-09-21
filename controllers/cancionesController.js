const { response } = require("../app");
let db = require("../database/models")

let cancionesController = {

    canciones: function (req, res) {
        db.Cancion.findAll()
            .then(function (canciones) {
                res.status(200).json({
                    total: canciones.lenght,
                    data: canciones,
                    status: 200
                });
                //console.log(canciones);
                //res.send(canciones)

            })
    },
    guardado: (req, res) => {
        db.Cancion.create(req.body)
            .then(cancion => {
                return res.status(200).json({
                    data: cancion,
                    status: 200,
                    created: "OK"
                })
            })


    },

    detalle: function (req, res) {
        db.Cancion.findByPk(req.params.id, {

        })
            .then(cancion => {
                res.status(200).json({
                    data: cancion,
                    status: 200
                })


            })

},
    borrar: function (req, res) {
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
            .then(response =>{
                return res.json(response)
            })
        })
        
    }

}

module.exports = cancionesController
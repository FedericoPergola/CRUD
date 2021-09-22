//const { where } = require("sequelize/types");
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
           //from: canciones,
            where: {
                id: req.params.id
            }
            .then(response =>{
                return res.json(response)
            })
        })
        
    },

    editar: async(req, res) => {
        await db.Cancion.update(req.body, {
        where: {
            id: req.params.id
        }});
        res.json({
            success: "Edicion correcta"
        })   
       
    },

    album: function (req, res){
        db.Cancion.findAll({
            where: {
            album_id: req.params.id
        }})
        .then(canciones => {
            return res.status(200).json(canciones)
        })
        
    }
    
}

module.exports = cancionesController
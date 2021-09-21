module.exports = function(sequelize, dataTypes) {
    let alias = "Artista";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(45)
        },
        apellido: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tableName: "artistas"
        /*timestamps: false*/
    }
    

    let Artistas = sequelize.define(alias, cols, config)

    Artistas.associate = function(models){
        Artistas.hasMany(models.Cancion,{
            as: "canciones", 
            /*through: ""*/
            foreignKey: "artista_id"
        });
    }

    return Artistas;
}
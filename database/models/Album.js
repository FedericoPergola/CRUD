module.exports = function(sequelize, dataTypes) {
    let alias = "Album";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(45)
        },
        duracion: {
            type: dataTypes.INTEGER(45)
        }
    }

    let config = {
        tableName: "albumes"
        /*timestamps: false*/
    }
    

    let Albumes = sequelize.define(alias, cols, config)

    Albumes.associate = function(models){
        Albumes.belongsTo(models.Cancion,{
            as: "canciones", 
            /*through: ""*/
            foreignKey: "album_id"
        });
    }


    return Albumes;
}
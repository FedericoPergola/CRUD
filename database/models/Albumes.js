module.exports = function(sequelize, dataTypes) {
    let alias = "Albumes";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "albumes"
        /*timestamps: false*/
    }
    

    let Albumes = sequelize.define(alias, cols, config)

    Albumes.associate = function(models){
        Albumes.belongsTo(models.Canciones,{
            as: "canciones", 
            /*through: ""*/
            foreingnKey: "album_id"
        });
    }


    return Albumes;
}
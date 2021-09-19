module.exports = function(sequelize, dataTypes) {
    let alias = "Genero";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tableName: "generos"
        /*timestamps: false*/
    }
    
    let Generos = sequelize.define(alias, cols, config)

    Generos.associate = function(models){
        Generos.hasMany(models.Cancion,{
            as: "canciones", 
            foreignKey: "genero_id"
        });
    }

    return Generos;
}
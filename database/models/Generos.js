module.exports = function(sequelize, dataTypes) {
    let alias = "Generos";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "generos"
        /*timestamps: false*/
    }
    
    let Generos = sequelize.define(alias, cols, config)

    Generos.associate = function(models){
        Generos.hasMany(models.Canciones,{
            as: "canciones", 
            foreingnKey: "genero_id"
        });
    }

    return Generos;
}
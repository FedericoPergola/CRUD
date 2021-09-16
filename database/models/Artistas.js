module.exports = function(sequelize, dataTypes) {
    let alias = "Artistas";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "artistas"
        /*timestamps: false*/
    }
    

    let Artistas = sequelize.define(alias, cols, config)

    Artistas.associate = function(models){
        Artistas.belongsTo(models.Canciones,{
            as: "canciones", 
            /*through: ""*/
            foreingnKey: "artista_id"
        });
    }

    return Artistas;
}
const { Model, DataTypes } = require('sequelize')
const Jogo = require('./Jogo')

class Loja extends Model {
    static init(connection) {

        /* Método de inicialização do modelo, recebe todos os atributos que estão no banco */
        super.init({
            idLoja: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            link: {
                type:DataTypes.STRING(300),
                allowNull: false
            },
            lat: {
                type:DataTypes.FLOAT,
                allowNull: false
            },
            lng: {
                type:DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize: connection,
            tableName: 'tblLoja',
            timestamps: false,
            
        })
    }

    /* Método de associação do modelo com os Jogos */
    static associate(models) {
        this.belongsToMany(models.Jogo, {
            foreignKey: 'idLoja',
            through: 'tblJogo_Loja',
            timestamps: false,
            as: 'Jogo'
        })
    }
    
}

module.exports = Loja
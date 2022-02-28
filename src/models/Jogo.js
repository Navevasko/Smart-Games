const { Model, DataTypes } = require('sequelize')
const Plataforma = require('./Plataforma')
const Loja = require('./Loja')

class Jogo extends Model {
    static init(connection) {

        /* Método de inicialização do modelo, recebe todos os atributos que estão no banco */
        super.init({
            idJogo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            descricao: {
                type:DataTypes.TEXT,
                allowNull: false,
            },
            imagem: {
                type:DataTypes.STRING,
                allowNull: false,
            },
            preco: {
                type:DataTypes.FLOAT,
                allowNull: false,
            }
        }, {
            sequelize: connection,
            tableName: 'tblJogo',
            timestamps: false,
            
        })
    }

    /* Método de associação do modelo com as Plataformas */
    static associatePlataforma(models) {
        this.belongsToMany(models.Plataforma, {
            foreignKey: 'idJogo',
            through: 'tblJogo_Plataforma',
            timestamps: false,
            as: 'Plataforma'
        })
    }

    /* Método de associação do modelo com as Lojas */
    static associateLoja(models) {
        this.belongsToMany(models.Loja, {
            foreignKey: 'idJogo',
            through: 'tblJogo_Loja',
            timestamps: false,
            as: 'Loja'
        })
    }
}

module.exports = Jogo
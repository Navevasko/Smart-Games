const Jogo = './Jogo'

const { Model, DataTypes } = require('sequelize')

class Plataforma extends Model {
    static init(connection) {

        /* Método de inicialização do modelo, recebe todos os atributos que estão no banco */
        super.init({
            idPlataforma: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type:DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize: connection,
            tableName: 'tblPlataforma',
            timestamps: false,
            
        })
    }

    /* Método de associação do modelo com os Jogos */
    static associate(models) {
        this.belongsToMany(models.Jogo, {
            foreignKey: 'idPlataforma',
            through: 'tblJogo_Plataforma',
            timestamps: false,
            as: 'Jogo'
        })
    }
}

module.exports = Plataforma
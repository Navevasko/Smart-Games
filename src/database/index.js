const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Jogo = require('../models/Jogo')
const Loja = require('../models/Loja')
const Plataforma = require('../models/Plataforma')

const connection = new Sequelize(dbConfig)

Jogo.init(connection);
Loja.init(connection);
Plataforma.init(connection);

Jogo.associateLoja(connection.models)
Jogo.associatePlataforma(connection.models)
Loja.associate(connection.models);
Plataforma.associate(connection.models)

module.exports = connection
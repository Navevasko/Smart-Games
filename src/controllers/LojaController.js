const Jogo = require('../models/Jogo')
const Loja = require('../models/Loja')

module.exports = {

    /* Método para mostrar todas as lojas inseridas no banco */
    async get(req, res) {
        const lojas = await Loja.findAll()

        return res.json(lojas)
    },

    /* Método para mostrar apenas uma loja inserida no banco, buscando pela chave primária */
    async getPK(req, res) {
        const id = req.params.idLoja

        const loja = await Loja.findByPk(id)

        return res.json(loja)
    },
    
    /* Método para inserir uma loja no banco */
    async store(req, res) {
        const {nome, link, lat, lng} = req.body

        const loja = await Loja.create({nome, link, lat, lng});

        return res.json(loja)
    }
}
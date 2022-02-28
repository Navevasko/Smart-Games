const Plataforma = require('../models/Plataforma')

module.exports = {

    /* Método para mostrar todas as plataformas inseridas no banco */
    async get(req, res) {
        const plataformas = await Plataforma.findAll()

        return res.json(plataformas)
    },

    /* Método para mostrar apenas uma plataforma inserida no banco, buscando pela chave primária */
    async getPK(req, res) {
        const id = req.params.idPlataforma

        const plataforma = await Plataforma.findByPk(id)

        return res.json(plataforma)
    },
    
    /* Método para inserir uma plataforma no banco */
    async store(req, res) {
        const {nome} = req.body

        const plataforma = await Plataforma.create({nome});

        return res.json(plataforma)
    }
}
const Jogo = require('../models/Jogo')
const Reader = require('../functions/readExcel')
const {readPlatform, readStore} = require('../functions/readPlatform')

module.exports = {

    /* Método para mostrar todos os jogos inseridos no banco */
    async get(req, res) {
        const jogos = await Jogo.findAll({
            include: [{
                association: 'Loja',
                as: 'Loja'
            },
            {
                association: 'Plataforma',
                as: 'Plataforma'
            }]
            
        })

        return res.json({jogo: jogos})
    },

    /* Método para mostrar apenas um jogo inserido no banco, buscando pela chave primária */
    async getPK(req, res) {
        const id = req.params.idJogo

        const jogo = await Jogo.findByPk(id, {
            include: [{
                association: 'Loja',
                as: 'Loja'
            },
            {
                association: 'Plataforma',
                as: 'Plataforma'
            }]
            
        })

        return res.json({jogo: jogo})
    },

    /* Método para inserir um jogo no banco */
    async store(req, res) {
        const {nome, descricao, imagem, preco} = req.body

        const jogo = await Jogo.create({nome, descricao, imagem, preco});

        return res.json(jogo)
    },

    /* Método para inserir vários jogos no banco a partir de um arquivo xlsx */
    async storeExcel(req, res) {
        const {link} = req.body

        const data = Reader(link).map((element) => {
            return element.data
        }) 

        const jogos = data[0].forEach((element) => {
            return Jogo.create({
                nome: element['Nome do Jogo'],
                descricao: element['Descrição'],
                imagem: element['Link da Imagem'],
                preco: element['Preço']
            })
        })


        /* Tentativa de inserir no banco todas as relações dos jogos */

        // const plataformas = data[0].map( (element) => {
        //     const plataformas = element['Plataformas'].split('/')

        //     return plataformas
        // })

        // const idPlataformas = plataformas.map((element) => {
        //     const id = element.map((element) => readPlatform(element))

        //     return id
        // })

        // const platforms = idPlataformas.forEach((element) => {
        //     return JogoPlataforma.create()
        // })

        // const lojas = data[0].map( (element) => {
        //     const lojas = element['Lojas'].split('/')

        //     return lojas
        // })

        // const idLoja = lojas.map((element) => {
        //     const id = element.map((element) => readStore(element))

        //     return id
        // })

        /* Retorna uma mensagem para certificar de que deu certo */
        return res.json({message: 'Jogos inseridos com sucesso'})
    }
}
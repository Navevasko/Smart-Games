const express = require('express')
const JogoController = require('../controllers/JogoController')
const LojaController = require('../controllers/LojaController')
const PlataformaController = require('../controllers/PlataformaController')

const routes = express.Router()


/* JOGOS */

/* Requisição post para jogos: Insere um jogo */
routes.post('/addJogo', JogoController.store)

/* Requisição post para leitura de arquivos xlsx: Lê um arquivo excel, transforma em json e insere os dados no banco */
routes.post('/addExcel', JogoController.storeExcel)

/* Requisição get para jogos: Retorna todos os jogos */
routes.get('/jogos', JogoController.get)

/* Requisição get para jogos: Retorna apenas um jogo dependendo do ID */
routes.get('/jogo/:idJogo', JogoController.getPK)

/* PLATAFORMAS */

/* Requisição post para plataformas: Insere uma plataforma */
routes.post('/AddPlataforma', PlataformaController.store)

/* Requisição get para plataformas: Retorna todos os plataformas */
routes.get('/plataformas', PlataformaController.get)

/* Requisição get para plataformas: Retorna apenas um plataforma dependendo do ID */
routes.get('/plataforma/:idPlataforma', PlataformaController.getPK)

/* LOJAS */

/* Requisição post para loja: Insere uma loja */
routes.post('/Addlojas', LojaController.store)

/* Requisição get para lojas: Retorna todos os lojas */
routes.get('/lojas', LojaController.get)

/* Requisição get para lojas: Retorna apenas um loja dependendo do ID */
routes.get('/loja/:idLoja', LojaController.getPK)

module.exports = routes;
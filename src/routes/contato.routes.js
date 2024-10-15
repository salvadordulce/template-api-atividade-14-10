const express = require('express');  // Importa o Express
const router = express.Router();     // Cria uma instância de roteamento do Express
const contatoController = require('../controllers/contato.controller');  // Importa o controlador para contatos

// Define a rota GET para buscar todos os contatos
router.get('/', contatoController.getContatos);

// Define a rota POST para criar um novo contato
router.post('/', contatoController.criarContato);

module.exports = router;
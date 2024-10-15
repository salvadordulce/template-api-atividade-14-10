const pool = require("../config/database"); // Importanto conexão do banco de dados
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função que retorna todos os contatos
async function listarContatos() {
    const buscarContatos = await prisma.contatos.findMany();

    return buscarContatos;
};

// Função que cria um novo contato
async function criarContato(nome, telefone) {
    const novocontato = await prisma.contatos.create({
        data: {
          nome: nome,
          telefone: telefone
        }
      });

    return novocontato;
};


module.exports = {
    listarContatos,
    criarContato
}

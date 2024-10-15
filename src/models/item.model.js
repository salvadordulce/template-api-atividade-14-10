const pool = require("../config/database"); // Importanto conexão do banco de dados
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função que retorna todos os itens armazenados
async function listItems() {
  const buscarItems = await prisma.items.findMany();

  return buscarItems;
};

// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  const newItem = await prisma.items.create({
    data: {
      name: name
    }
  });

  return newItem;
};


module.exports = {
  listItems,
  createItem
}

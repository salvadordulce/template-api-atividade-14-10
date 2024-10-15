const contatoModel = require("../models/contato.model");

async function getContatos(req, res) {
    const contatos = await contatoModel.listarContatos();
    res.json(contatos);
}

async function criarContato(req, res) {
    const { nome, telefone } = req.body;

    if (!nome) {
        return res.status(400).json({ message: 'Contato é obrigátorio' });
    } if (!telefone) {
        return res.status(400).json({ message: 'Telefone é obrigátorio' });
    }

    const novocontato = await contatoModel.criarContato(nome, telefone);

    if (novocontato) {
        return res.status(201).json({ message: 'Contato criado com sucesso!' })
    } else {
        return res.status(500).json({ message: 'ERROR' })
    }

}

module.exports = {
    getContatos,
    criarContato
}
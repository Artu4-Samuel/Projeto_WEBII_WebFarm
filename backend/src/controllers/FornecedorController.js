const FornecedorService = require('../services/FornecedorService');

class FornecedorController {
    async cadastrar(req, res) {
        try {
            const dadosFornecedor = req.body;
            const novoFornecedor = await FornecedorService.criarFornecedor(dadosFornecedor);

            return res.status(201).json(novoFornecedor);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new FornecedorController();
const FuncionariosService = require('../services/FuncionariosService');

class FuncionariosController {
    async cadastrar(req, res) {
        try {
            const dadosFuncionarios = req.body;
            const novoFuncionarios = await FuncionariosService.criarFuncionarios(dadosFuncionarios);

            return res.status(201).json(novoFuncionarios);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new FuncionariosController();
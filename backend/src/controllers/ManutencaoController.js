const ManutencaoService = require('../services/ManutencaoService');

class ManutencaoController {
    async cadastrar(req, res) {
        try {
            const dadosManutencao = req.body;
            const novaManutencao = await ManutencaoService.criarManutencao(dadosManutencao);

            return res.status(201).json(novaManutencao);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new ManutencaoController();
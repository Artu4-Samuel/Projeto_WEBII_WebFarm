const FazendaService = require('../services/FazendaService');

class FazendaController {
    async cadastrar(req, res) {
        try {
            const dadosFazenda = req.body;
            const novaFazenda = await FazendaService.criarFazenda(dadosFazenda);

            return res.status(201).json(novaFazenda);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new FazendaController();
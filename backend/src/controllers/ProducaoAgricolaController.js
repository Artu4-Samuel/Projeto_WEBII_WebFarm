const ProducaoAgricolaService = require('../services/ProducaoAgricolaService');

class ProducaoAgricolaController {
    async cadastrar(req, res) {
        try {
            const dadosProducaoAgricola =req.body;
            const novaProducaoAgricola = await ProducaoAgricolaService.criarProducaoAgricola(dadosProducaoAgricola);
            return res.status(201).json(novaProducaoAgricola);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
   }
}

module.exports = new ProducaoAgricolaController();
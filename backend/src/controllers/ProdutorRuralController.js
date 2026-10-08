const ProdutorRuralService = require('../services/ProdutorRuralService');

class ProdutorRuralController {
    async cadastrar(req, res) { try {
            const dadosProdutorRural = req.body;
            const novoProdutorRural = await ProdutorRuralService.criarProdutorRural(dadosProdutorRural);

            return res.status(201).json(novoProdutorRural);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new ProdutorRuralController();
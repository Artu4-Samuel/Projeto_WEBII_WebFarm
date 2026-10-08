const MaquinarioService = require('../services/MaquinarioService');

class MaquinarioController {
    async cadastrar(req, res) {
        try {
            const dadosMaquinario = req.body;
            const novoMaquinario = await MaquinarioService.criarMaquinario(dadosMaquinario);

            return res.status(201).json(novoMaquinario);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }}
module.exports = new MaquinarioController();
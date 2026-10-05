const AnimalService = require('../services/AnimalService');

class AnimalController {
  async cadastrar(req, res) {
    try {
      const dadosAnimal = req.body;
      const novoAnimal = await AnimalService.criarAnimal(dadosAnimal);
       return res.status(201).json(novoAnimal);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new AnimalController();

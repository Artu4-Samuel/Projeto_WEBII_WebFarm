const AnimalRepository = require('../repositories/AnimalRepository.js');
class AnimalService {
async criarAnimal(dados) {
// RN016: código de identificação obrigatório
if (!dados.codigo_brinco) {
throw new Error('O código de identificação (brinco) é obrigatório.');
}
if (!dados.especie) {
throw new Error('A espécie do animal é obrigatória.');
}
if (dados.peso < 0) {
throw new Error('O peso não pode ser negativo.');
}
const animalExistente =
await AnimalRepository.findByCodigoBrinco(dados.codigo_brinco);
if (animalExistente) {
throw new Error('Já existe um animal com este código de identificação.');
}
if (dados.favorito === undefined) {
dados.favorito = false;
}
return await AnimalRepository.create(dados);
}
async listarAnimais() {
return await AnimalRepository.findAll();
}
async buscarAnimal(id) {
return await AnimalRepository.findById(id);
}
async atualizarAnimal(id, dados) {
if (dados.peso < 0) {
throw new Error('O peso não pode ser negativo.');
}
return await AnimalRepository.update(id, dados);
}
async excluirAnimal(id) {
return await AnimalRepository.delete(id);
}
async listarFavoritos() {
return await AnimalRepository.findFavoritos();
}
async favoritarAnimal(id) {
const animal = await AnimalRepository.findById(id);
if (!animal) {
throw new Error('Animal não encontrado.');
}
return await AnimalRepository.update(id, {
favorito: true
});
}
}
module.exports = new AnimalService();
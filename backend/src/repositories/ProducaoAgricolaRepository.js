const ProducaoAgricola = require('../models/ProducaoAgricola');
class ProducaoAgricolaRepository {
async create(data) {
return await ProducaoAgricola.create(data);
}
async findAll() {
return await ProducaoAgricola.findAll();
}
async findById(id) {
return await ProducaoAgricola.findByPk(id);
}
async update(id, data) {
const producao = await ProducaoAgricola.findByPk(id);
if (!producao) {
return null;
}
return await producao.update(data);
}
async delete(id) {
const producao = await ProducaoAgricola.findByPk(id);
if (!producao) {
return null;
}
return await producao.destroy();
}
}
module.exports = new ProducaoAgricolaRepository();
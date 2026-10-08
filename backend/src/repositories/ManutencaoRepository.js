const Manutencao = require('../models/Manutencao');
class ManutencaoRepository {
async create(data) {
return await Manutencao.create(data);
}
async findAll() {
return await Manutencao.findAll();
}
async findById(id) {
return await Manutencao.findByPk(id);
}
async update(id, data) {
const manutencao = await Manutencao.findByPk(id);
if (!manutencao) {
return null;
}
return await manutencao.update(data);
}
async delete(id) {
const manutencao = await Manutencao.findByPk(id);
if (!manutencao) {
return null;
}
return await manutencao.destroy();
}
}
module.exports = new ManutencaoRepository();
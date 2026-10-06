const Fazenda = require('../models/Fazenda');
class FazendaRepository {
async create(data) {
return await Fazenda.create(data);
}
async findAll() {
return await Fazenda.findAll();
}
async findById(id) {
return await Fazenda.findByPk(id);
}
async update(id, data) {
const fazenda = await Fazenda.findByPk(id);
if (!fazenda) {
return null;
}
return await fazenda.update(data);
}
async delete(id) {
const fazenda = await Fazenda.findByPk(id);
if (!fazenda) {
return null;
}
return await fazenda.destroy();
}
}
module.exports = new FazendaRepository();
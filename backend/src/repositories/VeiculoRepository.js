const Veiculo = require('../models/Veiculo.js');
class VeiculoRepository {
async create(data) {
return await Veiculo.create(data);
}
async findAll() {
return await Veiculo.findAll();
}
async findById(id) {
return await Veiculo.findByPk(id);
}
async update(id, data) {
const veiculo = await Veiculo.findByPk(id);
if (!veiculo) {
return null;
}
return await veiculo.update(data);
}
async delete(id) {
const veiculo = await Veiculo.findByPk(id);
if (!veiculo) {
return null;
}
return await veiculo.destroy();
}
}
module.exports = new VeiculoRepository();
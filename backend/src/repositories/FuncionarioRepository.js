const Funcionario = require('../models/Funcionario.js');
class FuncionarioRepository {
async create(data) {
return await Funcionario.create(data);
}
async findAll() {
return await Funcionario.findAll();
}
async findById(id) {
return await Funcionario.findByPk(id);
}
async findByEmail(email) {
return await Funcionario.findOne({
where: {
email: email
}
});
}
async update(id, data) {
const funcionario = await Funcionario.findByPk(id);
if (!funcionario) {
return null;
}
return await funcionario.update(data);
}
async delete(id) {
const funcionario = await Funcionario.findByPk(id);
if (!funcionario) {
return null;
}
return await funcionario.destroy();
}
}
module.exports = new FuncionarioRepository();
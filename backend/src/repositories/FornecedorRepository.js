const Fornecedor = require('../models/Fornecedor');
class FornecedorRepository {
async create(data) {
return await Fornecedor.create(data);
}
async findAll() {
return await Fornecedor.findAll();
}
async findById(id) {
return await Fornecedor.findByPk(id);
}
async findByCpfCnpj(cpf_cnpj) {
return await Fornecedor.findOne({
where: {
cpf_cnpj: cpf_cnpj
}
});
}
async update(id, data) {
const fornecedor = await Fornecedor.findByPk(id);
if (!fornecedor) {
return null;
}
return await fornecedor.update(data);
}
async delete(id) {
const fornecedor = await Fornecedor.findByPk(id);
if (!fornecedor) {
return null;
}
return await fornecedor.destroy();
}
}
module.exports = new FornecedorRepository();
const FornecedorRepository = require('../repositories/FornecedorRepository');
class FornecedorService {
async criarFornecedor(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar fornecedores.');
}
if (!dados.nome) {
throw new Error('O nome do fornecedor é obrigatório.');
}
if (!dados.cpf_cnpj) {
throw new Error('O CPF/CNPJ do fornecedor é obrigatório.');
}
if (!dados.cell) {
throw new Error('O celular do fornecedor é obrigatório.');
}
if (!dados.email) {
throw new Error('O email do fornecedor é obrigatório.');
}
const fornecedorExistente =
await FornecedorRepository.findByCpfCnpj(dados.cpf_cnpj);
if (fornecedorExistente) {
throw new Error('Já existe um fornecedor com este CPF/CNPJ.');
}
return await FornecedorRepository.create(dados);
}
async listarFornecedores() {
return await FornecedorRepository.findAll();
}
async buscarFornecedor(id) {
return await FornecedorRepository.findById(id);
}
async atualizarFornecedor(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar fornecedores.');
}
if (dados.cpf_cnpj) {
const fornecedorExistente =
await FornecedorRepository.findByCpfCnpj(dados.cpf_cnpj);
if (fornecedorExistente && fornecedorExistente.id_fornecedor != id) {
throw new Error('Já existe um fornecedor com este CPF/CNPJ.');
}
}
return await FornecedorRepository.update(id, dados);
}
async excluirFornecedor(id, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir fornecedores.');
}
return await FornecedorRepository.delete(id);
}
}
module.exports = new FornecedorService();
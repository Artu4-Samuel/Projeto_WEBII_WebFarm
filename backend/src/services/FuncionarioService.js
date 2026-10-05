const FuncionarioRepository = require('../repositories/FuncionarioRepository');
class FuncionarioService {
async criarFuncionario(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar funcionários.');
}
if (!dados.nome) {
throw new Error('O nome é obrigatório.');
}
if (!dados.email) {
throw new Error('O email é obrigatório.');
}
if (!dados.cargo) {
throw new Error('O cargo é obrigatório.');
}
if (dados.salario < 0) {
throw new Error('O salário não pode ser negativo.');
}
const funcionarioExistente =
await FuncionarioRepository.findByEmail(dados.email);
if (funcionarioExistente) {
throw new Error('Já existe um funcionário com este email.');
}
return await FuncionarioRepository.create(dados);
}
async listarFuncionarios() {
return await FuncionarioRepository.findAll();
}
async buscarFuncionario(id) {
return await FuncionarioRepository.findById(id);
}
async atualizarFuncionario(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar funcionários.');
}
if (dados.salario < 0) {
throw new Error('O salário não pode ser negativo.');
}
return await FuncionarioRepository.update(id, dados);
}
async excluirFuncionario(id, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir funcionários.');
}
return await FuncionarioRepository.delete(id);
}
}
module.exports = new FuncionarioService();
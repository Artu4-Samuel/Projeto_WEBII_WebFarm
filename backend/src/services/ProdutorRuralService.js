const ProdutorRuralRepository = require('../repositories/ProdutorRuralRepository.js');
const PerodutorRuralRepository = require('../repositories/ProdutorRuralRepository.js');
class ProdutorRuralService {
async criarUsuario(dados) {
if (!dados.nome) {
throw new Error('O nome é obrigatório.');
}
if (!dados.email) {
throw new Error('O email é obrigatório.');
}
if (!dados.senha) {
throw new Error('A senha é obrigatória.');
}
const usuarioExistente = await ProdutorRuralRepository.findByEmail(dados.email);
if (usuarioExistente) {
throw new Error('Este email já está cadastrado.');
}
if (!dados.perfil) {
dados.perfil = 'Funcionário';
}
dados.ativo = true;
return await ProdutorRuralRepository.create(dados);
}
async listarUsuarios() {
return await ProdutorRuralRepository.findAll();
}
async buscarUsuario(id) {
return await ProdutorRuralRepository.findById(id);
}
async login(email, senha) {
const produtorRural = await produtorRuralRepository.findByEmail(email);
if (!produtorRural) {
throw new Error('Usuário não encontrado.');
}
if (!usuario.ativo) {
throw new Error('Usuário inativo.');
}
if (usuario.senha !== senha) {
throw new Error('Senha incorreta.');
}
return usuario;
}
async atualizarUsuario(id, dados, produtorRuralLogado) {
if (produtorRuralLogado.id !== id && produtorRuralLogado.perfil !== 'Administrador') {
throw new Error('Você não tem permissão para alterar este usuário.');
}
return await ProdutorRuralRepository.update(id, dados);
}
async excluirUsuario(id, produtorRuralLogado) {
if (produtorRuralLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir usuários.');
}
return await ProdutorRuralRepository.delete(id);
}
}
module.exports = new UsuarioService();
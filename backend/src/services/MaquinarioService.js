const MaquinarioRepository =
require('../repositories/MaquinarioRepository');
class MaquinarioService {
async criarMaquinario(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar maquinários.');
}
if (!dados.nome) {
throw new Error('O nome do maquinário é obrigatório.');
}
if (!dados.tipo) {
throw new Error('O tipo do maquinário é obrigatório.');
}
if (!dados.marca) {
throw new Error('A marca do maquinário é obrigatória.');
}
if (!dados.modelo) {
throw new Error('O modelo do maquinário é obrigatório.');
}
if (dados.valor_aquisicao < 0) {
throw new Error('O valor de aquisição não pode ser negativo.');
}
return await MaquinarioRepository.create(dados);
}
async listarMaquinarios() {
return await MaquinarioRepository.findAll();
}
async buscarMaquinario(id) {
return await MaquinarioRepository.findById(id);
}
async atualizarMaquinario(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar maquinários.');
}
if (dados.valor_aquisicao < 0) {
throw new Error('O valor de aquisição não pode ser negativo.');
}
return await MaquinarioRepository.update(id, dados);
}
async excluirMaquinario(id, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir maquinários.');
}
return await MaquinarioRepository.delete(id);
}
}
module.exports = new MaquinarioService();
const ManutencaoRepository =
require('../repositories/ManutencaoRepository');
class ManutencaoService {
    async criarManutencao(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar manutenções.');
}
if (!dados.data) {
throw new Error('A data da manutenção é obrigatória.');
}
if (!dados.descricao) {
throw new Error('A descrição da manutenção é obrigatória.');
}
if (!dados.tipo) {
throw new Error('O tipo de manutenção é obrigatório.');
}
if (dados.valor < 0) {
throw new Error('O valor da manutenção não pode ser negativo.');
}
return await ManutencaoRepository.create(dados);
}
async listarManutencoes() {
return await ManutencaoRepository.findAll();
}
async buscarManutencao(id) {
return await ManutencaoRepository.findById(id);
}
async atualizarManutencao(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar manutenções.');
}
if (dados.valor < 0) {
throw new Error('O valor da manutenção não pode ser negativo.');
}
return await ManutencaoRepository.update(id, dados);
}
async excluirManutencao(id, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir manutenções.');
}
return await ManutencaoRepository.delete(id);
}
}
module.exports = new ManutencaoService();
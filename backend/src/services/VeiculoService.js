const VeiculoRepository = require('../repositories/VeiculoRepository');
class VeiculoService {
async criarVeiculo(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar veículos.');
}
if (!dados.tipo) {
throw new Error('O tipo do veículo é obrigatório.');
}
if (!dados.modelo) {
throw new Error('O modelo do veículo é obrigatório.');
}
return await VeiculoRepository.create(dados);
}
async listarVeiculos() {
return await VeiculoRepository.findAll();
}
async buscarVeiculo(id) {
return await VeiculoRepository.findById(id);
}
async atualizarVeiculo(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar veículos.');
}
return await VeiculoRepository.update(id, dados);
}
async excluirVeiculo(id, usuarioLogado) {
    if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir veículos.');
}
return await VeiculoRepository.delete(id);
}
}
module.exports = new VeiculoService();
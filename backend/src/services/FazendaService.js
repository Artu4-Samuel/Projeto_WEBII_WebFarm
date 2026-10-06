const FazendaRepository = require('../repositories/FazendaRepository');
class FazendaService {
async criarFazenda(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar fazendas.');
}
if (!dados.nome) {
throw new Error('O nome da fazenda é obrigatório.');
}
if (!dados.endereco) {
throw new Error('O endereço da fazenda é obrigatório.');
}
if (dados.area_hectares === undefined || dados.area_hectares === null) {
throw new Error('A área da fazenda é obrigatória.');
}
if (dados.area_hectares < 0) {
throw new Error('A área da fazenda não pode ser negativa.');
}
if (!dados.tipo_producao) {
throw new Error('O tipo de produção é obrigatório.');
}
if (!dados.data_cadastro) {
throw new Error('A data de cadastro é obrigatória.');
}
return await FazendaRepository.create(dados);
}
async listarFazendas() {
return await FazendaRepository.findAll();
}
async buscarFazenda(id) {
return await FazendaRepository.findById(id);
}
async atualizarFazenda(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar fazendas.');
}
if (dados.area_hectares !== undefined && dados.area_hectares < 0) {
throw new Error('A área da fazenda não pode ser negativa.');
}
return await FazendaRepository.update(id, dados);
}
async excluirFazenda(id, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir fazendas.');
}
return await FazendaRepository.delete(id);
}
}
module.exports = new FazendaService();
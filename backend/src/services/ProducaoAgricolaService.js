const ProducaoAgricolaRepository =
require('../repositories/ProducaoAgricolaRepository');
class ProducaoAgricolaService {
async criarProducao(dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode cadastrar produção.');
}
if (!dados.cultura) {
throw new Error('A cultura é obrigatória.');
}
if (dados.area_plantada === undefined || dados.area_plantada === null) {
throw new Error('A área plantada é obrigatória.');
}
if (!dados.data_plantio) {
throw new Error('A data de plantio é obrigatória.');
}
if (dados.area_plantada < 0) {
throw new Error('A área plantada não pode ser negativa.');
}
if (dados.quant_produzida < 0) {
throw new Error('A quantidade produzida não pode ser negativa.');
}
return await ProducaoAgricolaRepository.create(dados);
}
async listarProducoes() {
    return await ProducaoAgricolaRepository.findAll();
}
async buscarProducao(id) {
return await ProducaoAgricolaRepository.findById(id);
}
async atualizarProducao(id, dados, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode alterar a produção.');
}
if (dados.area_plantada < 0) {
throw new Error('A área plantada não pode ser negativa.');
}
if (dados.quant_produzida < 0) {
throw new Error('A quantidade produzida não pode ser negativa.');
}
return await ProducaoAgricolaRepository.update(id, dados);
}
async excluirProducao(id, usuarioLogado) {
if (usuarioLogado.perfil !== 'Administrador') {
throw new Error('Apenas o administrador pode excluir produção.');
}
return await ProducaoAgricolaRepository.delete(id);
}
}
module.exports = new ProducaoAgricolaService();
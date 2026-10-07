const Animal = require('./Animal');
const Fazenda = require('./Fazenda');
const Fornecedor = require('./Fornecedor');
const Funcionario = require('./Funcionario');
const Manutencao = require('./Manutencao');
const Maquinario = require('./Maquinario');
const ProducaoAgricola = require('./ProducaoAgricola');
const ProdutorRural = require('./ProdutorRural');
const Veiculo = require('./Veiculo');
const VacinacaoAnimal = require('./VacinacaoAnimal');


// PRODUTOR RURAL → FAZENDA
ProdutorRural.hasMany(Fazenda, {
  foreignKey: 'id_produtor'
});

Fazenda.belongsTo(ProdutorRural, {
  foreignKey: 'id_produtor'
});


// FAZENDA → ANIMAIS
Fazenda.hasMany(Animal, {
  foreignKey: 'id_fazenda'
});

Animal.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});


// FAZENDA → FUNCIONÁRIOS
Fazenda.hasMany(Funcionario, {
  foreignKey: 'id_fazenda'
});

Funcionario.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});


// FAZENDA → MAQUINÁRIOS
Fazenda.hasMany(Maquinario, {
  foreignKey: 'id_fazenda'
});

Maquinario.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});


// FAZENDA → VEÍCULOS
Fazenda.hasMany(Veiculo, {
  foreignKey: 'id_fazenda'
});

Veiculo.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});


// FAZENDA → PRODUÇÃO AGRÍCOLA
Fazenda.hasMany(ProducaoAgricola, {
  foreignKey: 'id_fazenda'
});

ProducaoAgricola.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});


// FAZENDA → FORNECEDORES
Fazenda.hasMany(Fornecedor, {
  foreignKey: 'id_fazenda'
});

Fornecedor.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});


// ANIMAL → VACINAÇÃO ANIMAL
Animal.hasMany(VacinacaoAnimal, {
  foreignKey: 'id_animal'
});

VacinacaoAnimal.belongsTo(Animal, {
  foreignKey: 'id_animal'
});


// MAQUINÁRIO → MANUTENÇÃO
Maquinario.hasMany(Manutencao, {
  foreignKey: 'id_equipamento'
});

Manutencao.belongsTo(Maquinario, {
  foreignKey: 'id_equipamento'
});


// VEÍCULO → MANUTENÇÃO
Veiculo.hasMany(Manutencao, {
  foreignKey: 'id_veiculo'
});

Manutencao.belongsTo(Veiculo, {
  foreignKey: 'id_veiculo'
});


module.exports = {
  Animal,
  Fazenda,
  Fornecedor,
  Funcionario,
  Manutencao,
  Maquinario,
  ProducaoAgricola,
  ProdutorRural,
  Veiculo,
  VacinacaoAnimal
};

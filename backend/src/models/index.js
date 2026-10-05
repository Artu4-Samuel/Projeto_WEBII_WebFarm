const Animal = require('./Animal');
const Fazenda = require('./Fazenda');
const Fornecedor = require('./Fornecedor');
const Funcionario = require('./Funcionario');
const Manutencao = require('./Manutencao');
const Maquinario = require('./Maquinario');
const ProducaoAgricola = require('./ProducaoAgricola');
const ProdutorRural = require('./ProdutorRural');
const Veiculo = require('./Veiculo');

// Produtor Rural possui Fazendas
ProdutorRural.hasMany(Fazenda, {
  foreignKey: 'id_produtor'
});

Fazenda.belongsTo(ProdutorRural, {
  foreignKey: 'id_produtor'
});

// Fazenda possui Animais
Fazenda.hasMany(Animal, {
  foreignKey: 'id_fazenda'
});

Animal.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});

// Fazenda possui Funcionários
Fazenda.hasMany(Funcionario, {
  foreignKey: 'id_fazenda'
});

Funcionario.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});

// Fazenda possui Maquinários
Fazenda.hasMany(Maquinario, {
  foreignKey: 'id_fazenda'
});

Maquinario.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});

// Fazenda possui Veículos
Fazenda.hasMany(Veiculo, {
  foreignKey: 'id_fazenda'
});

Veiculo.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
});

// Fazenda possui Produções Agrícolas
Fazenda.hasMany(ProducaoAgricola, {
  foreignKey: 'id_fazenda'
});

ProducaoAgricola.belongsTo(Fazenda, {
  foreignKey: 'id_fazenda'
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
  Veiculo
};

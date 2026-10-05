const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Maquinario = sequelize.define('Maquinario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING
  },
  marca: {
    type: DataTypes.STRING
  },
  modelo: {
    type: DataTypes.STRING
  },
  ano_fabricacao: {
    type: DataTypes.INTEGER
  },
  data_aquisicao: {
    type: DataTypes.DATEONLY
  },
  valor_aquisicao: {
    type: DataTypes.DECIMAL(10, 2)
  },
  status: {
    type: DataTypes.STRING
  },
  id_fazenda: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Maquinario;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fazenda = sequelize.define('Fazenda', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING
  },
  area_hectares: {
    type: DataTypes.FLOAT
  },
  tipo_producao: {
    type: DataTypes.STRING
  },
  data_cadastro: {
    type: DataTypes.DATEONLY
  },
  id_produtor: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Fazenda;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Veiculo = sequelize.define('Veiculo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  modelo: {
    type: DataTypes.STRING
  },
  marca: {
    type: DataTypes.STRING
  },
  ano: {
    type: DataTypes.INTEGER
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
  tipo: {
    type: DataTypes.STRING
  },
  funcao: {
    type: DataTypes.STRING
  },
  quilometragem: {
    type: DataTypes.FLOAT
  },
  status: {
    type: DataTypes.STRING
  },
  id_fazenda: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Veiculo;

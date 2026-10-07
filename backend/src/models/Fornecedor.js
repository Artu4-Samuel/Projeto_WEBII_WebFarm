const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fornecedor = sequelize.define('Fornecedor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf_cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  cell: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  id_fazenda: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Fornecedor;

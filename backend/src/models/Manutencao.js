const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Manutencao = sequelize.define('Manutencao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2)
  },
  tipo: {
    type: DataTypes.STRING
  },
  id_equipamento: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_veiculo: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Manutencao;

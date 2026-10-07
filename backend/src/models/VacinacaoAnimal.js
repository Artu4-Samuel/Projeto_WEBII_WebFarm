const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VacinacaoAnimal = sequelize.define('VacinacaoAnimal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_vacina: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_aplicacao: {
    type: DataTypes.DATE
  },
  proxima_dose: {
    type: DataTypes.DATE
  },
  id_animal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = VacinacaoAnimal;

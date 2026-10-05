const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProducaoAgricola = sequelize.define('ProducaoAgricola', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cultura: {
    type: DataTypes.STRING,
    allowNull: false
  },
  area_plantada: {
    type: DataTypes.FLOAT
  },
  data_plantio: {
    type: DataTypes.DATEONLY
  },
  data_colheita: {
    type: DataTypes.DATEONLY
  },
  quant_produzida: {
    type: DataTypes.FLOAT
  },
  id_fazenda: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = ProducaoAgricola;

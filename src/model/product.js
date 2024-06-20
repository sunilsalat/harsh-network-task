const { DataTypes } = require('sequelize')
const sequelize = require('../database/config')

const Product = sequelize.define(
  'Product',
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    tableName: 'products',
    timestamps: false
  }
)

module.exports = Product

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roles extends Model {}

Roles.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
         model: 'employee',
         key: 'id',
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'roles'
  }
);

module.exports = Roles;
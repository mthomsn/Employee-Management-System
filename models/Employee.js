const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    first_name: {
         type: DataTypes.STRING,
         allowNull: false,
       },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    currently_employed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      },
    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'salary',
        }
    },
    role_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id',
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'title',
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = Employee;
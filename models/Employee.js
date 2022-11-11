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
    name: {
         type: DataTypes.STRING,
         allowNull: false,
    },
    start_date: {
        type: DataTypes.STRING,
        allowNull: true
      },
    // end_date: {
    //     type: DataTypes.DATE,
    //     allowNull: true,
    //   },
    // currently_employed: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'roles',
          key: 'id',
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
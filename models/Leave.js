const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Leave extends Model { }

Leave.init(
   {
      leave_balance: {
       type: DataTypes.INTEGER,
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
      modelName: 'leave'
   }
);

module.exports = Leave;
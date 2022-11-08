const Employee = require('./Employee');
const Roles = require ('./Roles')
const Leave = require('./Leave');

// module.exports = { User }, { Entry }

Employee.hasMany(Leave, {
   foreignKey: 'employee_id',
   onDelete: 'CASCADE'
 });
 
Leave.belongsTo(Employee, {
   foreignKey: 'employee_id'
 });

 Employee.hasOne(Roles, {
  foreignKey: 'id'
 }); 
 
 Roles.hasMany(Employee, {
  foreignKey: 'role_id'
 });

 
//  module.exports = { User, Entry };
module.exports = { Employee, Roles, Leave };
 
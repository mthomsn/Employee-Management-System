const Employee = require('./Employee');
const Roles = require ('./Roles')
const Leave = require('./Leave');

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
  foreignKey: 'employee_id'
 }); 

module.exports = { Employee, Roles, Leave };